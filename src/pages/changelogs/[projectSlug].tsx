import { useRouter } from "next/router";
import {
  BlogGridItemProps,
  FooterComponent,
  PageHeroComponent,
  ProfileComponent,
} from "../../components";
import { BlogGrid } from "../../components/BlogComponent/BlogGrid/BlogGrid";
import { SeoProps } from "../../database/SEOProps";
import { Tag } from "../../interfaces";
import { getHashtags } from "../../services/notionServices";
import { useEffect, useState } from "react";
import axios from "axios";

const mountPath = (tag: Tag) => {
  return {
    params: {
      projectSlug: tag.name,
    },
  };
};

export const getStaticPaths = async () => {
  const tags: Tag[] = await getHashtags();
  return {
    paths: tags.map((tag: Tag) => mountPath(tag)),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { projectSlug } = context.params;

  let props = {
    projectSlug: projectSlug,
  };

  props = JSON.parse(JSON.stringify(props));
  return {
    props,
    revalidate: 60 * 60 * 1,
  };
};

export default function Hashtag({ projectSlug }: { projectSlug: string }) {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogGridItemProps[]>([]);

  useEffect(() => {
    if (posts.length === 0) {
      axios
        .get("/api/changelog", {
          params: {
            quantity: 150,
            projectSlug: projectSlug,
          },
        })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error("Erro ao obter os dados da API:", error);
        });
    }
  }, []);

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }
  const pageTitle = "🚀 Novidades do " + projectSlug;
  return (
    <>
      <SeoProps
        title={pageTitle}
        description={pageTitle}
        featureImage="/img/pages/blog.jpg"
      />
      <PageHeroComponent title={pageTitle} backgroundUrl="/img/pages/blog.jpg">
        <section>
          <div className="blog">
            <div className="row">
              <div className="col-md-10">
                <h2>📰 {pageTitle}</h2>
              </div>
            </div>
            <div className="space-low"></div>
            <BlogGrid posts={posts} />
          </div>
        </section>
      </PageHeroComponent>

      <ProfileComponent />
      <FooterComponent />
    </>
  );
}

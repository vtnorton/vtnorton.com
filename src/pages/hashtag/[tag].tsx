import { useRouter } from 'next/router'
import {
  BlogGridItemProps,
  FooterComponent,
  PageHeroComponent,
} from '../../components'
import { BlogGrid } from '../../components/BlogComponent/BlogGrid/BlogGrid'
import { SeoProps } from '../../database/SEOProps'
import { Tag } from '../../interfaces'
import { getHashtags } from '../../services/notionServices'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Section } from '../../components/SectionComponent'
import { ProfileSection } from '../../sections'

const mountPath = (tag: Tag) => {
  return {
    params: {
      tag: tag.name,
    },
  }
}

export const getStaticPaths = async () => {
  const tags: Tag[] = await getHashtags()
  return {
    paths: tags.map((tag: Tag) => mountPath(tag)),
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const { tag } = context.params

  let props = {
    tag: tag,
  }

  props = JSON.parse(JSON.stringify(props))
  return {
    props,
    revalidate: 60 * 60 * 1,
  }
}

export default function Hashtag({ tag }: { tag: string }) {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogGridItemProps[]>([])

  useEffect(() => {
    if (posts.length === 0) {
      axios
        .get('/api/post', {
          params: {
            quantity: 150,
            tag: tag,
          },
        })
        .then((response) => {
          setPosts(response.data)
        })
        .catch((error) => {
          console.error('Erro ao obter os dados da API:', error)
        })
    }
  }, [])

  if (router.isFallback) {
    return <p>Carregando...</p>
  }
  const pageTitle = 'Posts sobre ' + tag
  return (
    <>
      <SeoProps
        title={pageTitle}
        description={pageTitle}
        featureImage="/img/pages/blog.jpg" />
      <PageHeroComponent title={pageTitle} backgroundUrl="/img/pages/blog.jpg">
        <Section>
          <h2>📰 {pageTitle}</h2>
          <div className="space-low"></div>
          <BlogGrid posts={posts} />
        </Section>
      </PageHeroComponent>

      <div className='container'>
        <ProfileSection />
      </div>

      <FooterComponent />
    </>
  )
}

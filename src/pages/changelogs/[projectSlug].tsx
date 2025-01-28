import { useRouter } from 'next/router'
import {
  FooterComponent,
  PageHeroComponent,
} from '../../components'
import { BlogGrid } from '../../components/BlogComponent/BlogGrid/BlogGrid'
import { SeoProps } from '../../database/SEOProps'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Section } from '../../components/SectionComponent'
import { ProfileSection } from '../../sections'
import { Changelog } from '../../models/Changelog'
import { productsItems } from '../../database/ProductShelfItems'

const mountPath = (slug: string) => {
  return {
    params: {
      projectSlug: slug,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs: string[] = productsItems.map((x) => x.slug)
  return {
    paths: slugs.map((tag) => mountPath(tag)),
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const { projectSlug } = context.params

  let props = {
    projectSlug: projectSlug,
  }

  props = JSON.parse(JSON.stringify(props))
  return {
    props,
    revalidate: 60 * 60 * 1,
  }
}

// TODO: Trocar o parâmetro productSlug para projectId
export default function ProjectPage({ projectSlug }: { projectSlug: string }) {
  const router = useRouter()
  const [posts, setPosts] = useState<Changelog[]>([])
  const projectId = productsItems.filter((x) => x.slug == projectSlug)[0].id as string

  useEffect(() => {
    if (posts.length === 0) {
      axios
        .get('/api/changelog', {
          params: {
            quantity: 150,
            projectid: projectId,
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

  if (router.isFallback)
    return <p>Carregando...</p>

  const pageTitle = '🚀 Novidades do ' + projectSlug
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

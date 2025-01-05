import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

import { BlogGridItemProps } from '../components'
import { PostType, Tag } from '../interfaces'
import { Changelog } from '../interfaces/Changelog'
import { PodcastEpisode } from '../interfaces/PodcastEpisode'
import { Event, EventType } from '../interfaces/Event'
import { createClient } from '@supabase/supabase-js'
import { getPosts } from './postsServices'
import { Post } from '../models/Post'

const NOTION_DB_DEVREL = process.env.devrelDb as string
const NOTION_SECRET = process.env.notionSecret as string
const NOTION_TOKEN = process.env.notionToken as string

const notion = new Client({
  auth: NOTION_SECRET,
})

const notionApi = new NotionAPI({
  authToken: NOTION_TOKEN,
})

const SUPABASE_URL = process.env.SUPABASE_URL as string
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const queryNotion = async (filter: any, database?: string, sortByAsc?: string) => {
  const sort = database ? [] : [{
    property: 'Date',
    direction: sortByAsc ? 'ascending' : 'descending',
  }]

  const response = await notion.databases.query({
    database_id: database || NOTION_DB_DEVREL,
    sorts: sort as any,
    filter: {
      and: filter,
    },
  })
  return response.results
}

export const getPodcasts = async (): Promise<PodcastEpisode[]> => {
  const filter = [
    {
      property: 'Type',
      multi_select: {
        contains: 'Podcast',
      },
    },
    {
      property: 'Date',
      date: {
        on_or_before: new Date().toISOString(),
      },
    },
    {
      property: 'Status-podcast',
      status: {
        equals: 'Publicado',
      },
    },
  ]

  const { data: platform, error } = await supabase.from('platform').select('*')

  if (!platform || error)
    return []


  const results = await queryNotion(filter)
  const podcasts = results.map((result: any) => {
    const item: PodcastEpisode = {
      id: result.id,
      link: result.properties.Slug.rich_text[0].href,
      title: result.properties.Name.title[0].text.content,
      date: result.properties.Date.date.start as string,
      coverURL: getFeaturedImage(result.cover),
      feedName: platform.find((platform: any) => platform.id === result.properties['Plataforma'].relation[0]?.id)?.name,
    }

    return item
  })

  return podcasts.filter(
    (cast): cast is PodcastEpisode => typeof cast !== 'undefined',
  )
}

export const getEvents = async (): Promise<Event[]> => {
  const filter = [
    {
      property: 'Type',
      multi_select: {
        contains: 'Evento',
      },
    },
    {
      property: 'Date',
      date: {
        on_or_after: new Date().toISOString(),
      },
    },
    {
      or: [
        {
          property: 'Status-evento',
          status: {
            equals: 'Produzindo',
          },
        },
        {
          property: 'Status-evento',
          status: {
            equals: 'Enjoy',
          },
        },
        {
          property: 'Status-evento',
          status: {
            equals: 'Follow up',
          },
        },
      ],
    },
  ]

  const results = await queryNotion(filter, undefined, 'asc')

  return Promise.all(results.map(async (result: any) => {
    const item: Event = {
      id: result.id,
      link: result.properties.Slug.rich_text[0]?.href,
      title: result.properties.Name.title[0].text.content,
      date: result.properties.Date.date.start as string,
      place: result.properties.Local.rich_text[0]?.text.content,
      type: EventType.SPEAKER,
      talk: 'await getTalk(result.properties.Palestra.relation[0]?.id)',
    }

    return item
  })).then((events) => {
    return events.filter(
      (event): event is Event => typeof event !== 'undefined',
    )
  })
}

export const getChangelogs = async (projectSlug?: string) => {
  const filter = [
    {
      property: 'Type',
      multi_select: {
        contains: 'Changelog',
      },
    },
    {
      or: [
        {
          property: 'Status-post',
          status: {
            equals: 'Follow-up',
          },
        },
        {
          property: 'Status-post',
          status: {
            equals: 'Published',
          },
        },
      ],
    },
  ]

  if (projectSlug) {
    filter.push({
      property: 'Hashtags',
      multi_select: {
        contains: projectSlug,
      },
    })
  }
  const results = await queryNotion(filter)

  const logs = results.map((result: any) => {
    const versionName = result.properties.Name.title[0].text.content
    projectSlug = projectSlug
      ? projectSlug
      : result.properties.Hashtags.multi_select[0].name
    const item: Changelog = {
      id: result.id,
      projectSlug: projectSlug as string,
      fullSlug: `/release/${projectSlug}/${versionName}`,
      title: versionName,
      date: result.properties.Date.date.start,
      featureImage: getFeaturedImage(result.cover),
      recordMap: {},
    }
    return item
  })

  return logs.filter((log): log is Changelog => typeof log !== 'undefined')
}

export const getPage = async (pageId: string) => {
  return await notionApi.getPage(pageId)
}

export const getChangelogByVersion = async (
  projectName: string,
  version: string,
) => {
  const logs = await getChangelogs(projectName)
  const log: any = logs.find((l: Changelog) => l.title === version) ?? null
  log.recordMap = await getPage(log.id)
  return log
}

export const getChangelogSectionItems = async (
  projectSlug?: string,
): Promise<BlogGridItemProps[]> => {
  const logs = await getChangelogs(projectSlug)
  const blogGridItems: BlogGridItemProps[] = []

  logs.map((log: Changelog) => {
    blogGridItems.push({
      id: log.id,
      image: log.featureImage,
      link: log.fullSlug,
      title: log.title,
      date: log.date,
      type: PostType.Changelog,
    })
  })

  return blogGridItems
}

export const getBlogSectionItems = async (
  tag?: string,
): Promise<BlogGridItemProps[]> => {
  const posts = await getPosts(tag)
  const blogGridItems: BlogGridItemProps[] = []

  posts.map((post: Post) => {
    blogGridItems.push({
      id: post.id,
      image: post.featureImage,
      link: post.fullSlug,
      title: post.title,
      hashtags: post.hashtags,
      date: post.date,
      type: PostType.Post,
    })
  })

  const changelogs = await getChangelogSectionItems()
  blogGridItems.push(...changelogs)
  blogGridItems.sort((a, b) =>
    b.date && a.date
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date().getTime(),
  )

  return blogGridItems
}



export const getHashtags = async (): Promise<Tag[]> => {
  const response = await notion.databases.query({
    database_id: process.env.devrelDb ?? '',
  })
  const { results } = response as any

  const hashtags: Tag[] = []
  for (const result of results) {
    const d = result.properties! as any
    for (const select of d.Hashtags.multi_select) {
      if (!hashtags.filter((hashtag) => hashtag.name == select.name).length)
        hashtags.push({ name: select.name, color: select.color, count: 1 })
      else
        hashtags.filter((hashtag) => hashtag.name == select.name)[0].count += 1

    }
  }
  return hashtags
}

export const getFirstParagraph = (recordMap: any) => {
  const blocks = Object.values(recordMap.block)
  const firstParagraphBlock: any = blocks.find(
    (block: any) =>
      block.value?.type === 'text' && block.value.properties.title,
  )
  const firstParagraphText = firstParagraphBlock
    ? firstParagraphBlock.value.properties.title[0][0]
    : ''
  return firstParagraphText
}

const getFeaturedImage = (notionResult: any) => {
  if (!notionResult)
    return ''

  return notionResult.external
    ? notionResult.external.url
    : notionResult.file.url
}

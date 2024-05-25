import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

import { BlogGridItemProps } from "../components";
import { PostType, Tag } from "../interfaces";
import { Changelog } from "../interfaces/Changelog";
import { PodcastEpisode } from "../interfaces/PodcastEpisode";
import { Post } from "../interfaces/Post";

const notion = new Client({
  auth: process.env.notionSecret,
});

const notionApi = new NotionAPI({
  authToken: process.env.notionToken,
});

const queryNotion = async (filter: any) => {
  const response = await notion.databases.query({
    database_id: process.env.devrelDb as string,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    filter: {
      and: filter,
    },
  });
  return response.results;
};

export const getPodcasts = async (): Promise<PodcastEpisode[]> => {
  const filter = [
    {
      property: "Type",
      multi_select: {
        contains: "Podcast",
      },
    },
    {
      property: "Date",
      date: {
        on_or_before: new Date().toISOString(),
      },
    },
    {
      property: "Status-podcast",
      select: {
        equals: "Publicado",
      },
    },
  ];

  const results = await queryNotion(filter);

  let podcasts = results.map((result: any) => {
    const item: PodcastEpisode = {
      id: result.id,
      link: result.properties.Slug.rich_text[0].href,
      title: result.properties.Name.title[0].text.content,
      date: result.properties.Date.date.start as string,
      coverURL: getFeaturedImage(result.cover),
      feedName: result.properties.Podcast.select.name,
    };

    return item;
  });

  return podcasts.filter(
    (cast): cast is PodcastEpisode => typeof cast !== "undefined",
  );
};

export const getPosts = async (tag?: string) => {
  const filter = [
    {
      property: "Type",
      multi_select: {
        contains: "Post",
      },
    },
    {
      property: "Date",
      date: {
        on_or_before: new Date().toISOString(),
      },
    },
    {
      or: [
        {
          property: "Status-post",
          status: {
            equals: "Query",
          },
        },
        {
          property: "Status-post",
          status: {
            equals: "Follow-up",
          },
        },
        {
          property: "Status-post",
          status: {
            equals: "Published",
          },
        },
      ],
    },
  ];

  if (tag) {
    filter.push({
      property: "Hashtags",
      multi_select: {
        contains: tag,
      },
    });
  }

  const results = await queryNotion(filter);

  let posts = results.map((result: any) => {
    const getHashtags = function () {
      let hashtags: string[] = [];
      result.properties.Hashtags.multi_select.map((item: any) => {
        hashtags.push(item.name);
      });
      return hashtags;
    };

    const item: Post = {
      id: result.id,
      url: result.url,
      slug: result.properties.Slug.rich_text[0].text.content,
      fullSlug: mountPostSlug(result),
      title: result.properties.Name.title[0].text.content,
      date: result.properties.Date.date.start,
      featureImage: getFeaturedImage(result.cover),
      hashtags: getHashtags(),
      recordMap: {},
      description: "",
    };
    return item;
  });

  return posts.filter((post): post is Post => typeof post !== "undefined");
};

export const getChangelogs = async (projectSlug?: string) => {
  const filter = [
    {
      property: "Type",
      multi_select: {
        contains: "Changelog",
      },
    },
    {
      or: [
        {
          property: "Status-post",
          status: {
            equals: "Follow-up",
          },
        },
        {
          property: "Status-post",
          status: {
            equals: "Published",
          },
        },
      ],
    },
  ];

  if (projectSlug) {
    filter.push({
      property: "Hashtags",
      multi_select: {
        contains: projectSlug,
      },
    });
  }
  const results = await queryNotion(filter);

  let logs = results.map((result: any) => {
    const versionName = result.properties.Name.title[0].text.content;
    projectSlug = projectSlug
      ? projectSlug
      : result.properties.Hashtags.multi_select[0].name;
    const item: Changelog = {
      id: result.id,
      projectSlug: projectSlug as string,
      fullSlug: `/release/${projectSlug}/${versionName}`,
      title: versionName,
      date: result.properties.Date.date.start,
      featureImage: getFeaturedImage(result.cover),
      recordMap: {},
    };
    return item;
  });

  return logs.filter((log): log is Changelog => typeof log !== "undefined");
};

export const getPostBySlug = async (slug: string) => {
  const posts = await getPosts();
  let post: any = posts.find((p: Post) => p.slug === slug) ?? null;
  post.recordMap = await getPage(post.id);
  post.description = getFirstParagraph(post.recordMap);
  return post;
};

export const getChangelogByVersion = async (
  projectName: string,
  version: string,
) => {
  const logs = await getChangelogs(projectName);
  let log: any = logs.find((l: Changelog) => l.title === version) ?? null;
  log.recordMap = await getPage(log.id);
  return log;
};

export const getChangelogSectionItems = async (
  projectSlug?: string,
): Promise<BlogGridItemProps[]> => {
  const logs = await getChangelogs(projectSlug);
  let blogGridItems: BlogGridItemProps[] = [];

  logs.map((log: Changelog) => {
    blogGridItems.push({
      id: log.id,
      image: log.featureImage,
      link: log.fullSlug,
      title: log.title,
      date: log.date,
      type: PostType.Changelog,
    });
  });

  return blogGridItems;
};

export const getBlogSectionItems = async (
  tag?: string,
): Promise<BlogGridItemProps[]> => {
  const posts = await getPosts(tag);
  const blogGridItems: BlogGridItemProps[] = [];

  posts.map((post: Post) => {
    blogGridItems.push({
      id: post.id,
      image: post.featureImage,
      link: post.fullSlug,
      title: post.title,
      hashtags: post.hashtags,
      date: post.date,
      type: PostType.Post,
    });
  });

  const changelogs = await getChangelogSectionItems();
  blogGridItems.push(...changelogs);
  blogGridItems.sort((a, b) =>
    b.date && a.date
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date().getTime(),
  );

  return blogGridItems;
};

export const getPage = async (pageId: string) => {
  return await notionApi.getPage(pageId);
};

export const getHashtags = async (): Promise<Tag[]> => {
  const response = await notion.databases.query({
    database_id: process.env.devrelDb ?? "",
  });
  const { results } = response as any;

  let hashtags: Tag[] = [];
  for (const result of results) {
    const d = result.properties! as any;
    for (const select of d.Hashtags.multi_select) {
      if (!hashtags.filter((hashtag) => hashtag.name == select.name).length) {
        hashtags.push({ name: select.name, color: select.color, count: 1 });
      } else {
        hashtags.filter((hashtag) => hashtag.name == select.name)[0].count += 1;
      }
    }
  }
  return hashtags;
};

export const getFirstParagraph = (recordMap: any) => {
  const blocks = Object.values(recordMap.block);
  const firstParagraphBlock: any = blocks.find(
    (block: any) =>
      block.value?.type === "text" && block.value.properties.title,
  );
  const firstParagraphText = firstParagraphBlock
    ? firstParagraphBlock.value.properties.title[0][0]
    : "";
  return firstParagraphText;
};

const mountPostSlug = (result: any): string => {
  const postDate = new Date(result.properties.Date.date.start);
  const pageSlug = result.properties.Slug.rich_text[0].text.content;
  const year = postDate.getFullYear().toString();
  const monthNumber = postDate.getMonth() + 1;
  const month = monthNumber.toString().padStart(2, "0");

  return `/${year}/${month}/${pageSlug}`;
};

const getFeaturedImage = (notionResult: any) => {
  if (!notionResult) return "";

  return notionResult.external
    ? notionResult.external.url
    : notionResult.file.url;
};

import dynamic from 'next/dynamic'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import TweetEmbed from 'react-tweet-embed'

import { HashtagListComponent } from './HashtagListComponent'

const Code = dynamic(() =>
	import('react-notion-x/build/third-party/code').then(async (m) => {
		await Promise.all([
			import('prismjs/components/prism-markup-templating.js'),
			import('prismjs/components/prism-markup.js'),
			import('prismjs/components/prism-bash.js'),
			import('prismjs/components/prism-go.js'),
			import('prismjs/components/prism-c.js'),
			import('prismjs/components/prism-cpp.js'),
			import('prismjs/components/prism-csharp.js'),
			import('prismjs/components/prism-js-templates.js'),
			import('prismjs/components/prism-yaml.js'),
			import('prismjs/components/prism-scss.js'),
			import('prismjs/components/prism-sql.js'),
		])
		return m.Code as any
	})
)
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), { ssr: false })

const Tweet = ({ id }: { id: string }) => {
	return <TweetEmbed tweetId={id} />
}

export const PostContentComponent = ({ title, content, hashtags }: { title: string; content: any; hashtags?: string[] }) => {
	return (
		<section className='section'>
			<div className='article-content'>
				<h1>{title}</h1>
				<NotionRenderer
					recordMap={content}
					fullPage={false}
					darkMode={false}
					components={{
						Code,
						Tweet,
						Modal,
					}} />
			</div>
			<div className='article-footer'>{hashtags && <HashtagListComponent hashtags={hashtags} />}</div>
		</section>
	)
}

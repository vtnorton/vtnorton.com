import React from 'react'
import { Hashtag } from '../../../interfaces'

export const HashtagListComponent = ({ hashtags }: { hashtags: string[] }) => {
	return (
		<>
			{hashtags.map((hashtag: string, index: number) => {
				return (
					<a className='hashtag' key={index} href={`/hashtag/${hashtag}`}>
						#{hashtag}
					</a>
				)
			})}
		</>
	)
}

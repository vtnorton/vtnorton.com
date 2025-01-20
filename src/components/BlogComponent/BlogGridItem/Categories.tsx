
export const Categories = ({ hashtags }: { hashtags: string[] }) => {
	if (hashtags) {
		return (
			<div className='meta-categories'>
				{hashtags.map((hashtag: string, index: number) => {
					const link = `/hashtag/${hashtag}`
					if (hashtags && hashtags.length - 1 == hashtags.indexOf(hashtag)) {
						return (
							<a key={index} href={link}>
								{hashtag}{' '}
							</a>
						)
					}
					else {
						return (
							<a key={index} href={link}>
								{hashtag},{' '}
							</a>
						)
					}
				})}
			</div>
		)
	}
	return <></>
}
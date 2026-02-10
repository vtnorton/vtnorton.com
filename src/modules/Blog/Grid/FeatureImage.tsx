export const FeatureImage = ({ link, imageUrl }: { link: string, imageUrl?: string }) => {
	return (
		<a href={link}>
			<figure className='post-img'>
				{imageUrl && <img alt='' src={imageUrl} />}
				<div className='overlay-img'></div>
			</figure>
		</a>
	)
}
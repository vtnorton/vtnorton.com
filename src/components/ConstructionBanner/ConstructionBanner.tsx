export const ConstructionBanner = () => {
	return (
		<div className='construction-banner' role='status' aria-live='polite'>
			<div className='construction-banner__inner'>
				<strong className='construction-banner__title'>SITE EM CONSTRUÇÃO: </strong>
				<span className='construction-banner__text'>
					Este site está tendo, em média,{' '}
					<a
						href='https://github.com/vtnorton/vtnorton.com/commits/main/'
						target='_blank'
						rel='noopener noreferrer'>
						5 atualizações por dia
					</a>
					. Realmente, em breve!
				</span>
			</div>
		</div>
	)
}

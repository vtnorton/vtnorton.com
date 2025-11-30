import { ImgHTMLAttributes } from 'react'

export const NoiseImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
	return (
		<div className={'noise-image' + (props.className ? ' ' + props.className : '')}>
			<img {...props} className='' />
			<div className='noise'></div>
		</div>
	)
}
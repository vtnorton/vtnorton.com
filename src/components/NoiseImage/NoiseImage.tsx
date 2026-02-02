import { ImgHTMLAttributes } from 'react'

interface NoiseImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	opacity?: number
}

export const NoiseImage = ({ opacity, className, ...props }: NoiseImageProps) => {
	return (
		<div className={'noise-image' + (className ? ' ' + className : '')}>
			<img {...props} className='' />
			{opacity &&
				<div className='overlay' style={{ opacity: opacity ?? 0 }}></div>
			}
			<div className='noise'></div>
		</div>
	)
}
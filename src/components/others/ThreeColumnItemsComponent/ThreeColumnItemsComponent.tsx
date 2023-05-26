import { ThreeColumnItem, ThreeColumnItemsComponentProps } from './ThreeColumnItemsComponentProps'

const renderSpace = (index: number) => {
	if (index >= 3) return <div className='space-long'></div>
}

export const ThreeColumnItemsComponent = (props: ThreeColumnItemsComponentProps) => {
	return (
		<div className='row showcase'>
			{props.items.map((item: ThreeColumnItem, index: number) => {
				let columnSize = index === 0 || index === 3 ? 'col-lg-3 col-md-6' : 'col-lg-3 col-md-6 col-lg-offset-1'
				return (
					<div key={index} className={columnSize}>
						{renderSpace(index)}
						<h3>{item.title}</h3>
						{item.content}
					</div>
				)
			})}
		</div>
	)
}

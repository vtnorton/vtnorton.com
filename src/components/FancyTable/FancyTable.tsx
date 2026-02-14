import { FancyTableItem } from './FancyTableItem'
import { FancyTableItems, FancyTableTitles } from './FancyTableTypes'

export const FancyTable = ({
	items,
	columns,
}: {
	items: FancyTableItems[]
	columns: FancyTableTitles
}) => {

	return (
		<div className='fancy-table'>
			<div className='ft-row header'>
				<div className='ft-row-content'>
					<p className='small'>{columns.mainTitle}</p>
					<p className='small'>{columns.descriptionTitle}</p>
				</div>
			</div>
			{items.map((item, index) => (
				<FancyTableItem key={'ft' + index} item={item} />
			))}
		</div>
	)
}
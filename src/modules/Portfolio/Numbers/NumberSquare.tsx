export const NumberSquare = ({
	id,
	title,
	number,
	description,
	isActive,
	onClick,
}: {
	id: string,
	title: string,
	number: string,
	description: string,
	isActive: boolean,
	onClick: (id: string) => void
}) => {
	return (
		<div
			className={`number-square ${isActive ? 'active' : ''}`}
			onClick={() => onClick(id)}
		>
			<h2>/{title}/</h2>
			<div className='number'>{number}</div>
			<p>{description}</p>
		</div>
	)
}
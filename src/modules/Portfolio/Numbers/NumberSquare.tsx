export const NumberSquare = ({
	title,
	number,
	description,
}:
	{
		title: string,
		number: string,
		description: string
	}) => {
	return (
		<div className='number-square'>
			<h2>/{title}/</h2>
			<div className='number'>/{number}</div>
			<p>{description}</p>
		</div>
	)
}
export const MenuLink = ({
	title,
	link,
}: {
	title: string
	link: string
}) => {
	return (
		<a href={link} className='menu-link'>
			<span>/{title}</span>
		</a>
	)
} 
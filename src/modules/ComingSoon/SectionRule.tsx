type SectionRuleProps = {
	folio: string
}

export const SectionRule = ({ folio }: SectionRuleProps) => {
	return (
		<header className='section-rule'>
			<span className='folio'>{folio}</span>
		</header>
	)
}

interface SectionTitleProps {
	eyebrow: string
	title: string
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
	return (
		<div className="section-title">
			<span className="eyebrow">{eyebrow}</span>
			<h2>{title}</h2>
		</div>
	)
}

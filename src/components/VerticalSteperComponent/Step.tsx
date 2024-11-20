
export const Step = ({ children, title, number }: { children: unknown, title: string, number?: number }) => {
	return (
		<div className="vertical-step">
			<div className="step-instructions">
				<div className="step-title">
					<code>{number}</code>
					<h3>{title}</h3>
				</div>
				<div className="step-description">
					{Array.isArray(children) ? children[0] : children}
				</div>
			</div>

			{Array.isArray(children) && (
				<div className="step-code">
					{children[1]}
				</div>
			)}
		</div>
	)
}
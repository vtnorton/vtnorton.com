export const AwardContent = () => {
	return (
		<div className='expanded-content'>
			<h3>Prêmios & Reconhecimentos</h3>
			<p>Validações que surgiram da prática contínua, da exposição pública e da influência direta em decisões reais.</p>
			<div className='awards'>
				<div className='award'>
					<img src='/img/portfolio/awards/wimvp.png' alt='Windows Insider MVP'></img>
					<div className='award-info'>
						<span>Windows Insider MVP</span>
						<div className='award-info-hover'>
							<p>Próximo ao time do Windows, meu feedback impactou o produto que bilhões de consumidores usam. É um reconhecimento por ouvir o que o público realmente quer e traduzir isso pra quem o constrói.</p>
							<p>— 7 ciclos</p>
						</div>
					</div>
				</div>
				<div className='award'>
					<img src='/img/portfolio/awards/mmvp.png' alt='Microsoft MVP'></img>
					<div className='award-info'>
						<span>Microsoft MVP</span>
						<div className='award-info-hover'>
							<p>Reconhecimento global por compartilhar conhecimento, criar conteúdo técnico e fortalecer comunidades dev. É criar impacto com consistência e estar presente onde desenvolvedores estão.</p>
							<p>— 3 ciclos</p>
						</div>
					</div>
				</div>
				<div className='award'>
					<img src='/img/portfolio/awards/code-in-the-dark.png' alt='Code In The Dark'></img>
					<div className='award-info'>
						<span>Code In The Dark</span>
						<div className='award-info-hover'>
							<p>Pensar sob pressão e depender de memória muscular pura, velocidade mental, zero margem pra erro. Vencer é provar excelência técnica quando o ambiente pede rapidez e precisão absoluta.</p>
							<p>— em 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
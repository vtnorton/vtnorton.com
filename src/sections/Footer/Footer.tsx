import Link from 'next/link'
import Image from 'next/image'
import { SocialMedias } from '../../components/Socials'

export const Footer = () => {
	return (
		<footer className='container'>
			<Link href='/'>
				<img src='/img/logo/logo-coloful.svg' alt='vtnorton' />
			</Link>
			<SocialMedias />

			<p>
				no downtime for hustle-as-a-service - <a href='mailto:contato@vtnorton.com'>contato@vtnorton.com</a> <br />
			</p>
			<p className='creative-commons'>
				Para melhorar a UX do site, utilizo Microsoft Clarity para entender como você navega aqui. Ao usar o site você concorda que eu e a Microsoft Podemos coletar alguns dados (anônimos). Sua privacidade é real importante pra mim, veja a <Link href='/termos/site'>política de privacidade</Link>. <br />O conteúdo deste site é licenciado sob a licença:{' '}
				<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1' target='_blank' rel='license noopener noreferrer'>
					<br />(CC BY-NC-SA 4.0)<br />
					<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1' alt='CC: Creative Commons' />
					<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1' alt='BY: Credit must be given to you, the creator.' />
					<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1' alt='NC: Only noncommercial use of your work is permitted.' />
					<Image height={22} width={22} unoptimized src='https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1' alt='SA: Adaptations must be shared under the same terms.' />
				</a>
			</p>
		</footer>
	)
}

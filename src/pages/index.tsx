import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ComingSoon } from '../modules/ComingSoon/ComingSoon'
import { comingSoonStatusService } from '../services/comingSoonStatusService'
import type { ComingSoonStatus } from '../types/ComingSoonStatus'

type IndexProps = {
	status: ComingSoonStatus
}

const MIN_REVALIDATE_SECONDS = 5 * 60
const MAX_REVALIDATE_SECONDS = 12 * 60 * 60

const drawRevalidateSeconds = (): number => {
	return Math.round(MIN_REVALIDATE_SECONDS + Math.random() * (MAX_REVALIDATE_SECONDS - MIN_REVALIDATE_SECONDS))
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
	const status = await comingSoonStatusService.getComingSoonStatus()
	return { props: { status }, revalidate: drawRevalidateSeconds() }
}

const Index = ({ status }: IndexProps) => {
	return (
		<>
			<Head>
				<title>AT FULL DRAW</title>
				<meta name='description' content='intensity by choice, not by default' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#f7f7f4' />
			</Head>
			<ComingSoon status={status} />
		</>
	)
}

export default Index

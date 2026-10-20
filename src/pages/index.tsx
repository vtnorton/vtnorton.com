import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { ComingSoon } from '../modules/ComingSoon/ComingSoon'
import { comingSoonStatusService } from '../services/comingSoonStatusService'
import type { ComingSoonStatus } from '../types/ComingSoonStatus'

type IndexProps = {
	status: ComingSoonStatus
}

export const config = {
	maxDuration: 60,
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
	const status = await comingSoonStatusService.getComingSoonStatus()
	return { props: { status } }
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

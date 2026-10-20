import Head from 'next/head'
import { mockedComingSoonStatus } from '../database/mockedComingSoonStatus'
import { ComingSoon } from '../modules/ComingSoon/ComingSoon'

const Index = () => {
	return (
		<>
			<Head>
				<title>AT FULL DRAW</title>
				<meta name='description' content='intensity by choice, not by default' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#f7f7f4' />
			</Head>
			<ComingSoon status={mockedComingSoonStatus} />
		</>
	)
}

export default Index

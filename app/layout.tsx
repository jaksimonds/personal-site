import { FC } from 'react'
import Header from '@/components/Header'
import { Footer } from '@jsimonds/component-library'
import { inter } from './fonts'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@jsimonds/component-library/lib/index.css'
import './styles/site.scss'

export const metadata: Metadata = {
	metadataBase: new URL('https://jaksimonds.dev'),
	title: 'Jackson Simonds',
	description:
		'Jackson Simonds is an accessibility-focused developer committed to crafting experiences that leaves no one behind.',
}

interface IRootLayout {
	children: any
}

const RootLayout: FC<IRootLayout> = ({ children }) => (
	<html lang="en">
		<body className={inter.className}>
			<a className="sr-only skip-to-main" href="#main">
				Skip to main content
			</a>
			<Header />
			<main id="main">{children}</main>
			<Footer />
			<Analytics />
		</body>
	</html>
)

export default RootLayout

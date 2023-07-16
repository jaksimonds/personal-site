import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { inter } from './fonts'
import { Metadata } from "next"
import './styles/site.scss'

export const metadata: Metadata = {
  title: 'Jackson Simonds',
  description: 'Front-end developer.'
}

interface IRootLayout {
  children: any
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang='en'>
    <body className={inter.className}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </body>
  </html>
)

export default RootLayout
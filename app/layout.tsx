import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { inter } from './fonts'

import './styles/site.scss'

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
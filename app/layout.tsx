import Footer from '@/components/Footer'
import { inter } from './fonts'
import './styles/site.scss'

interface IRootLayout {
  children: any
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang='en'>
    <body className={inter.className}>
      <main>
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
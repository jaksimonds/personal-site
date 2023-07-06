import Header from './components/Header'
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
    </body>
  </html>
)

export default RootLayout
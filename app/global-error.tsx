'use client'

import { FC, useEffect } from 'react'
import { oswald } from "fonts"
import Header from '@/components/Header'
import { Hero, Footer } from '@jsimonds/component-library'

interface IError {
  error: Error
  reset: () => void
}

const GlobalError: FC<IError> = ({
  error
}) => {
  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <html>
      <body>
        <Header />
        <main>
          <Hero
            heading='Something went wrong'
            headingClass={oswald.className}
            intro={'An unexpected error has occured and caused the application stop.'}
          />
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default GlobalError
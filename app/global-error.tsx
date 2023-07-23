'use client'

import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FC, useEffect } from 'react'

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
            intro={'An unexpected error has occured and caused the application stop.'}
          />
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default GlobalError
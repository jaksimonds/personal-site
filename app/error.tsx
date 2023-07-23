'use client'

import Hero from '@/components/Hero'
import { FC, useEffect } from 'react'

interface IError {
  error: Error
  reset: () => void
}

const Error: FC<IError> = ({
  error
}) => {
  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <>
      <Hero
        heading='Something went wrong'
        intro={'An unexpected error has occured and caused the application stop.'}
      />
    </>
  )
}

export default Error
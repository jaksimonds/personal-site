'use client'

import { FC, useEffect } from 'react'
import { oswald } from "fonts"
import { Hero } from '@jsimonds/component-library'

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
        headingClass={oswald.className}
        intro={'An unexpected error has occured and caused the application stop.'}
      />
    </>
  )
}

export default Error
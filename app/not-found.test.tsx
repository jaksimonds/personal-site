import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFound from './not-found'

describe('NotFound', () => {
  test('tests default', () => {
    const { container } = render(<NotFound />)

    const hero = container.querySelector('.hero')
    expect(hero).toBeInTheDocument()
  })
})
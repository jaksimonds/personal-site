import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Heading from '.'

describe('Heading', () => {
  test('tests default', () => {
    const { container } = render(<Heading level={1}>test</Heading>)

    const heading = container.querySelector('h1')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('test')
  })
})
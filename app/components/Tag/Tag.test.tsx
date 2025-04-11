import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tag from '.'

describe('Tag', () => {
  test('tests default', () => {
    const { container } = render(<Tag label='test' />)

    const tag = container.querySelector('small')
    expect(tag).toHaveTextContent('test')
  })
})
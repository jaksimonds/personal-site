/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorComponent from './error'

jest.mock('./components/Header', () => () => <header>test</header>)

describe('ErrorComponent', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  test('tests default', () => {
    const mockError = new Error('test error')
    const { container } = render(<ErrorComponent error={mockError} reset={jest.fn()} />)

    const hero = container.querySelector('.hero')
    expect(hero).toBeInTheDocument()
  })
})
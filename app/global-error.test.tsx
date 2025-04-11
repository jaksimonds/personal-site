/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import GlobalError from './global-error'

jest.mock('./components/Header', () => () => <header>test</header>)

describe('GlobalError', () => {
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const mockError = new Error('test error')
		const { container } = render(<GlobalError error={mockError} />)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()

		const footer = container.querySelector('footer')
		expect(footer).toBeInTheDocument()
	})
})

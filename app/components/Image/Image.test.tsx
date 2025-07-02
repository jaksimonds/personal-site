import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Image from '.'

describe('Image', () => {
	beforeAll(() => {
		jest.spyOn(console, 'log').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const { container } = render(<Image src="/test" alt="" />)

		const img = container.querySelector('img')
		expect(img).toBeInTheDocument()
		expect(img).toHaveAttribute('src', '/test')
	})
})

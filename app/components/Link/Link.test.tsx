import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Link from '.'

describe('Link', () => {
	beforeAll(() => {
		jest.spyOn(console, 'log').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const { container } = render(<Link href="/">test</Link>)

		const link = container.querySelector('a')
		expect(link).toHaveAttribute('href', '/')
		expect(link).toHaveTextContent('test')
	})

	test('tests external link', () => {
		const { container } = render(
			<Link href="https://jaksimonds.dev/">test</Link>,
		)

		const link = container.querySelector('a')
		expect(link).toHaveAttribute('href', 'https://jaksimonds.dev/')

		const externalIcon = link?.querySelector('svg')
		expect(externalIcon).toBeInTheDocument()
	})
})

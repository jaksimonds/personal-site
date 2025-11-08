import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation')

describe('Header', () => {
	test('tests default', () => {
		// @ts-ignore
		usePathname.mockReturnValue('/')
		const { container } = render(<Header />)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()
	})

	test('tests projects pathname', () => {
		// @ts-ignore
		usePathname.mockReturnValue('/projects')
		const { container } = render(<Header />)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()
	})

	test('tests about pathname', () => {
		// @ts-ignore
		usePathname.mockReturnValue('/about')
		const { container } = render(<Header />)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()
	})

	test('tests contact pathname', () => {
		// @ts-ignore
		usePathname.mockReturnValue('/contact')
		const { container } = render(<Header />)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()
	})
})

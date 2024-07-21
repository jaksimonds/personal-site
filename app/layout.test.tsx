/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import RootLayout, { metadata } from './layout'

jest.mock('./components/Header', () => () => <header>test</header>)

describe('RootLayout', () => {
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const { container } = render(
			<RootLayout>
				<section>test</section>
			</RootLayout>,
		)

		const header = container.querySelector('header')
		expect(header).toBeInTheDocument()

		const footer = container.querySelector('footer')
		expect(footer).toBeInTheDocument()

		const analytics = container.querySelector('.analytics')
		expect(analytics).toBeInTheDocument()
	})

	test('tests metadata', () => {
		expect(metadata).toBeDefined()
	})
})

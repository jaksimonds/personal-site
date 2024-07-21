import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './page'

describe('About', () => {
	test('tests default', () => {
		const { container } = render(<About />)

		const hero = container.querySelector('.hero')
		expect(hero).toBeInTheDocument()

		const twoColumnCallout = container.querySelector('.twoColumnCallout')
		expect(twoColumnCallout).toBeInTheDocument()
	})
})

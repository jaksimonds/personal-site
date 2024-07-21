import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactPage from './page'

describe('ContactPage', () => {
	test('tests default', () => {
		const { container } = render(<ContactPage />)

		expect(container).not.toBeEmptyDOMElement()
	})
})

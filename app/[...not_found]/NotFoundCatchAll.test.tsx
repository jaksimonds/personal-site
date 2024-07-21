import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFoundCatchAll from './page'

describe('NotFoundCatchAll', () => {
	test('tests default', () => {
		const { container } = render(<NotFoundCatchAll />)

		expect(container).toBeInTheDocument()
	})
})

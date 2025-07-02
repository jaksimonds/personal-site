import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Homepage from './page'

describe('Homepage', () => {
	test('tests default', async () => {
		const Page = await Homepage()
		const { container } = render(Page)
		expect(container).not.toBeEmptyDOMElement()
	})

	test('tests featuredProjects', async () => {
		const Page = await Homepage()
		const { container } = render(Page)

		const twoColumnCallout = container.querySelector('.twoColumnCallout')
		expect(twoColumnCallout).toBeInTheDocument()
	})

	test('tests page tech', async () => {
		const Page = await Homepage()
		const { container } = render(Page)

		const cardSection = container.querySelector('.cardSection')
		expect(cardSection).toBeInTheDocument()
	})
})

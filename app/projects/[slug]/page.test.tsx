import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectPage, { generateMetadata } from './page'
import { ReactElement } from 'react'

describe('ProjectPage', () => {
	test('tests default', async () => {
		const Page = await ProjectPage({
			params: Promise.resolve({
				slug: 'culvers',
			}),
		})
		const { container } = render(Page as ReactElement)
		expect(container).not.toBeEmptyDOMElement()
	})

	test('tests tech render', async () => {
		const Page = await ProjectPage({
			params: Promise.resolve({
				slug: 'culvers',
			}),
		})
		const { container } = render(Page as ReactElement)

		const cardSection = container.querySelector('.cardSection')
		expect(cardSection).toBeInTheDocument()
		expect(cardSection?.childElementCount).toBe(5)
	})

	test('tests generateMetadata', async () => {
		const metadata = await generateMetadata({
			params: Promise.resolve({
				slug: 'culvers',
			}),
		})
		expect(metadata).toEqual({
			title: "Project - Culver's | Jackson Simonds",
			description:
				"Culver's is nation-wide restaurant franchise based out of Sauk City Wisconsin. Their website provides users information about their various locations, menu items, and other informative content.",
		})
	})
})

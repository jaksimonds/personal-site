import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectsPage, { metadata } from './page'

describe('ProjectsPage', () => {
	test('tests default', async () => {
		const Page = await ProjectsPage()
		const { container } = render(Page)
		expect(container).not.toBeEmptyDOMElement()
	})

	test('tests metadata', () => {
		expect(metadata).toBeDefined()
	})
})

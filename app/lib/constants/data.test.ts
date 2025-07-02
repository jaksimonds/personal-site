import { tech, projects, pages } from './data'

describe('data', () => {
	test('tests tech', () => {
		expect(tech).toBeDefined()
	})

	test('tests projects', () => {
		expect(projects).toBeDefined()
	})

	test('tests pages', () => {
		expect(pages).toBeDefined()
	})
})

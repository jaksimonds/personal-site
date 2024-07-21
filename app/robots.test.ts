import robots from './robots'

describe('robots', () => {
	test('tests default', () => {
		const data = robots()
		expect(data).toBeDefined()
	})
})

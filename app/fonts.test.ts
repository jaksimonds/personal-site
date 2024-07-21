import { inter, oswald } from './fonts'

describe('fonts', () => {
	beforeAll(() => {
		jest.clearAllMocks()
	})

	afterAll(() => {
		jest.restoreAllMocks()
	})

	test('test inter', () => {
		expect(inter).toBeDefined()
	})

	test('test oswald', () => {
		expect(oswald).toBeDefined()
	})
})

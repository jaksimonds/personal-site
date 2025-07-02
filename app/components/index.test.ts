import {
	Card,
	CardSection,
	Copy,
	Footer,
	Header,
	Heading,
	Hero,
	Icon,
	Image,
	Link,
	Project,
	ProjectList,
	Tag,
	TwoColumnCallout,
} from './'

describe('components', () => {
	beforeEach(() => {
		jest.requireActual('./')
	})

	test('components should be defined', () => {
		expect(Card).toBeDefined()
		expect(CardSection).toBeDefined()
		expect(Copy).toBeDefined()
		expect(Footer).toBeDefined()
		expect(Header).toBeDefined()
		expect(Heading).toBeDefined()
		expect(Hero).toBeDefined()
		expect(Icon).toBeDefined()
		expect(Image).toBeDefined()
		expect(Link).toBeDefined()
		expect(Project).toBeDefined()
		expect(ProjectList).toBeDefined()
		expect(Tag).toBeDefined()
		expect(TwoColumnCallout).toBeDefined()
	})
})

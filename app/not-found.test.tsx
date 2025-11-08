import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFound from './not-found'

jest.mock(
	'@/components/Hero',
	() =>
		({
			heading,
			headingClass,
			simple,
		}: {
			heading: string
			headingClass: string
			simple: boolean
		}) => (
			<section className={`hero ${simple}`}>
				<h1 className={headingClass}>{heading}</h1>
			</section>
		),
)
describe('NotFound', () => {
	test('tests default', () => {
		const { container } = render(<NotFound />)

		const hero = container.querySelector('.hero')
		expect(hero).toBeInTheDocument()
	})
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './page'

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
jest.mock(
	'@/components/TwoColumnCallout',
	() =>
		({ image, children }: { image: string; children: any }) => (
			<section className="twoColumnCallout">
				<div>
					<div className="children">{children}</div>
				</div>
				<img src={image} alt="" width={0} height={0} />
			</section>
		),
)

describe('About', () => {
	test('tests default', () => {
		const { container } = render(<About />)

		const hero = container.querySelector('.hero')
		expect(hero).toBeInTheDocument()

		const twoColumnCallout = container.querySelector('.twoColumnCallout')
		expect(twoColumnCallout).toBeInTheDocument()
	})
})

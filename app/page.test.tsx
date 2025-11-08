import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Homepage from './page'

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
jest.mock(
	'@/components/CardSection',
	() =>
		({
			cards,
		}: {
			cards: {
				id: number
				name: string
			}[]
		}) => (
			<section className="cardSection">
				{cards?.map((card) => <div key={card?.id}>{card?.name}</div>)}
			</section>
		),
)

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

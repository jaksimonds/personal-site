/* eslint-disable @next/next/no-img-element */
jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	notFound: jest.fn(),
	usePathname: jest.fn(),
}))

jest.mock('@jsimonds/component-library', () => ({
	Hero: ({
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
	Link: ({
		href,
		className,
		target,
		children,
	}: {
		href: string
		className: string
		target: '_self' | '_blank'
		children: any
	}) => (
		<a className={className} target={target} href={href}>
			{children}
		</a>
	),
	Copy: ({
		heading,
		headingClass,
		intro,
	}: {
		heading: string
		headingClass: string
		intro: string
	}) => (
		<section className="copy">
			<h2 className={headingClass}>{heading}</h2>
			<p>{intro}</p>
		</section>
	),
	Icon: ({ name }: { name: string }) => <svg id={name}></svg>,
	Heading: ({ className, children }: { className: string; children: any }) => (
		<h2 className={className}>{children}</h2>
	),
	Tag: ({ label }: { label: string }) => <small>{label}</small>,
	TwoColumnCallout: ({ image, children }: { image: string; children: any }) => (
		<section className="twoColumnCallout">
			<div>
				<div className="children">{children}</div>
			</div>
			<img src={image} alt="" width={0} height={0} />
		</section>
	),
	ProjectList: ({
		projects,
	}: {
		projects: {
			id: number
			title: string
		}[]
	}) => (
		<section>
			{projects?.map((project) => <div key={project.id}>{project.title}</div>)}
		</section>
	),
	CardSection: ({
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
	Footer: () => <footer>test footer</footer>,
}))

jest.mock('@apollo/client', () => {
	const originalModule = jest.requireActual('@apollo/client')
	const MockedApolloClient = jest.fn(() => {
		return {
			query: jest.fn(),
			mutate: jest.fn(),
		}
	})
	return {
		__esModule: true,
		...originalModule,
		ApolloClient: MockedApolloClient,
	}
})

jest.mock('@vercel/analytics/react', () => ({
	Analytics: () => <section className="analytics"></section>,
}))

jest.mock('next/font/google', () => ({
	Inter: jest.fn(() => ({
		className: 'inter',
	})),
	Oswald: jest.fn(() => ({
		className: 'oswald',
	})),
}))

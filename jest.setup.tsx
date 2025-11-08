/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'),
	notFound: jest.fn(),
	usePathname: jest.fn(),
}))

// jest.mock(
// 	'./app/components/Link',
// 	() =>
// 		({
// 			href,
// 			className,
// 			target,
// 			children,
// 		}: {
// 			href: string
// 			className: string
// 			target: '_self' | '_blank'
// 			children: any
// 		}) => (
// 			<a className={className} target={target} href={href}>
// 				{children}
// 			</a>
// 		),
// )
// jest.mock(
// 	'./app/components/Copy',
// 	() =>
// 		({
// 			heading,
// 			headingClass,
// 			intro,
// 		}: {
// 			heading: string
// 			headingClass: string
// 			intro: string
// 		}) => (
// 			<section className="copy">
// 				<h2 className={headingClass}>{heading}</h2>
// 				<p>{intro}</p>
// 			</section>
// 		),
// )
// jest.mock('./app/components/Icon', () => ({ name }: { name: string }) => (
// 	<svg id={name}></svg>
// ))
// jest.mock(
// 	'./app/components/Heading',
// 	() =>
// 		({ className, children }: { className: string; children: any }) => (
// 			<h2 className={className}>{children}</h2>
// 		),
// )
// jest.mock('./app/components/Header', () => () => <header className="Header" />)
// jest.mock('./app/components/Tag', () => ({ label }: { label: string }) => (
// 	<small>{label}</small>
// ))

// jest.mock('./app/components/Project', () => () => <div />)
// jest.mock(
// 	'./app/components/ProjectList',
// 	() =>
// 		({
// 			projects,
// 		}: {
// 			projects: {
// 				id: number
// 				title: string
// 			}[]
// 		}) => (
// 			<section>
// 				{projects?.map((project) => (
// 					<div key={project.id}>{project.title}</div>
// 				))}
// 			</section>
// 		),
// )

// jest.mock('./app/components/Card', () => <div />)
// jest.mock(
// 	'./app/components/Image',
// 	() =>
// 		({
// 			src,
// 			alt,
// 			width,
// 			height,
// 		}: {
// 			src: string
// 			alt: string
// 			width: number
// 			height: number
// 		}) => <img src={src} alt={alt} width={width} height={height} />,
// )
// jest.mock('./app/components/Footer', () => <footer>test footer</footer>)

jest.mock('@vercel/analytics/react', () => ({
	Analytics: () => <section className="analytics"></section>,
}))
jest.mock('@vercel/speed-insights/next', () => ({
	SpeedInsights: () => <section className="speed-insights"></section>,
}))

jest.mock('next/font/google', () => ({
	Inter: jest.fn(() => ({
		className: 'inter',
	})),
	Oswald: jest.fn(() => ({
		className: 'oswald',
	})),
}))

jest.mock(
	'next/image',
	() =>
		({
			src,
			alt,
			width,
			height,
		}: {
			src: string
			alt: string
			width: number
			height: number
		}) => <img src={src} alt={alt} width={width} height={height} />,
)

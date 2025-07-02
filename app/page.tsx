import { oswald } from 'fonts'
import { Hero, CardSection, TwoColumnCallout } from '@/components'
import { IProject } from 'lib/types'
import { projects, pages } from 'lib/constants/data'

const Homepage = async () => {
	const featuredProjects = projects
		.filter((project) => project.id > projects.length - 4)
		.sort((a, b) => b.year - a.year)
	const page = pages.find((page) => page.slug === 'home')

	return (
		<div>
			<Hero
				heading="Jackson Simonds"
				headingClass={oswald.className}
				intro="Accessibility-focused developer committed to crafting experiences that leaves no one behind."
			/>
			{featuredProjects?.length
				? featuredProjects.map((project: IProject, index: number) => {
						const { id, slug, title, excerpt, url, thumbnail } = project
						return (
							<TwoColumnCallout
								key={id}
								heading={title}
								headingClass={oswald.className}
								copy={excerpt}
								slug={slug}
								url={url}
								image={thumbnail}
								alternate={!!(index % 2)}
								{...(index === 0 ? { loading: 'eager' } : {})}
							/>
						)
					})
				: ''}
			{page?.tech ? (
				<CardSection
					heading="Site Built Using..."
					iconCards
					cards={page.tech}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default Homepage

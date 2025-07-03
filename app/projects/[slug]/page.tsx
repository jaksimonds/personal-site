import { Metadata } from 'next'
import { oswald } from 'fonts'
import { Hero, CardSection } from '@/components'
import { projects } from 'lib/constants/data'

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> => {
	const { slug } = await params
	const project = projects.find((project) => project.slug === slug)

	return {
		title: `Project - ${project?.title} | Jackson Simonds`,
		description: project?.hero?.intro || '',
	}
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const project = projects.find((project) => project.slug === slug)
	const { hero, url, title, tech } = project || {
		hero: {},
		url: '',
		title: '',
		tech: [],
	}

	return (
		<div>
			<Hero
				heading={title}
				headingClass={oswald.className}
				url={url}
				image={hero?.image}
				intro={hero?.intro}
			/>
			{tech?.length ? (
				<CardSection
					heading="Site Built Using..."
					headingClass={oswald.className}
					iconCards
					cards={tech}
				/>
			) : (
				''
			)}
		</div>
	)
}

export default Page

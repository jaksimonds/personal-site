import { Metadata } from 'next'
import { FC } from 'react'
import { oswald } from 'fonts'
import { Hero, CardSection } from '@/components'
import { projects } from 'lib/constants/data'
import { IPage } from 'lib/types'

export const generateMetadata = async ({
	params,
}: IPage): Promise<Metadata> => {
	const project = projects.find((project) => project.slug === params.slug)

	return {
		title: `Project - ${project?.title} | Jackson Simonds`,
		description: project?.hero?.intro || '',
	}
}

const Page: FC<IPage> = async ({ params }) => {
	const project = projects.find((project) => project.slug === params.slug)
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

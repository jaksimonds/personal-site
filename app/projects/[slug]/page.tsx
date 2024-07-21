import { gql } from '@apollo/client'
import client from '../../client'
import { Metadata } from 'next'
import { FC } from 'react'
import { oswald } from 'fonts'
import { Hero, CardSection } from '@jsimonds/component-library'

const getProject = async (slug: string) => {
	const { data } = await client.query({
		query: gql`
			query GetProject($slug: String) {
				project(slug: $slug) {
					title
					url
					hero {
						image
						intro
					}
					tech {
						id
						name
						label
						content
						cta {
							text
							href
							target
						}
					}
				}
			}
		`,
		variables: {
			slug: slug,
		},
	})

	return data
}

interface IPage {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({
	params,
}: IPage): Promise<Metadata> => {
	const { project } = await getProject(params.slug)
	return {
		title: `Project - ${project.title} | Jackson Simonds`,
		description: project.hero.intro || '',
	}
}

const Page: FC<IPage> = async ({ params }) => {
	const { project } = await getProject(params.slug)
	const { hero, url, title, tech } = project
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

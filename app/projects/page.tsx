import { Metadata } from 'next'
import { oswald } from 'fonts'
import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'
import { projects } from 'lib/constants/data'

export const metadata: Metadata = {
	title: 'Projects | Jackson Simonds',
}

const ProjectsPage = async () => {
	return (
		<div>
			<Hero
				heading="Projects"
				headingClass={oswald.className}
				intro="This is a collection of things i've worked on."
				simple
			/>
			<ProjectList projects={projects} />
		</div>
	)
}

export default ProjectsPage

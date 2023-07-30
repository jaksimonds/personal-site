import { gql } from '@apollo/client'
import client from '../client'
import { Metadata } from "next"
import { oswald } from "fonts"
import { Hero } from '@jsimonds/component-library'
import ProjectList from '@/components/ProjectList'

export const metadata: Metadata = {
  title: 'Projects | Jackson Simonds'
}

const getProjects = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects { 
        projects {
          id
          slug
          title
          excerpt
          url
          year
          tech {
            id
            label
          }
        }
      }
    `
  })

  return data
}

const ProjectsPage = async () => {
  const {projects} = await getProjects()
  return (
    <div>
      <Hero
        heading='Projects'
        headingClass={oswald.className}
        intro="This is a collection of things i've worked on."
        simple
      />
      <ProjectList
        projects={projects}
      />
    </div>
  )
}

export default ProjectsPage
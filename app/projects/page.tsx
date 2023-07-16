import { gql } from '@apollo/client'
import client from '../client'
import { Metadata } from "next"
import Hero from '@/components/Hero'
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
        intro="This is a collection of things i've worked on."
      />
      <ProjectList
        projects={projects}
      />
    </div>
  )
}

export default ProjectsPage
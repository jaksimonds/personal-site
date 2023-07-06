import { gql } from '@apollo/client'
import client from '../client'

import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'

const getProjects = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects { 
        projects {
          id
          slug
          title
          excerpt
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
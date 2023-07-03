import { gql } from '@apollo/client'
import client from '../client'

import Heading from '@/components/Heading'
import ProjectList from '@/components/ProjectList'
import Scene from '@/components/Scene'

import styles from './Page.module.scss'

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
    <Scene>
      <div className={styles.content}>
        <Heading level={1}>Projects</Heading>
        <p>This is a collection of things i've worked on.</p>
        <ProjectList
          projects={projects}
        />
      </div>
    </Scene>
  )
}

export default ProjectsPage
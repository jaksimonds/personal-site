import { FC } from 'react'

import Card from "../Card"
import styles from './ProjectList.module.scss'

interface IProjectList {
  projects?: {
    id: number
    slug: string
    title: string
    excerpt: string
  }[]
}

const ProjectList: FC<IProjectList> = ({
  projects = []
}) => {
  return (
    <section className={styles.list}>
      {projects.length ? projects.map(project => (
        <Card
          key={project.id}
          slug={project.slug}
          heading={project.title}
          excerpt={project.excerpt}
        />
      )) : ''}
    </section>
  )
}

export default ProjectList
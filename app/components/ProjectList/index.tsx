import { FC } from 'react'

import Project from '../Project'
import styles from './ProjectList.module.scss'

interface IProjectList {
  projects?: {
    id: number
    slug: string
    title: string
    excerpt: string
    year: number
  }[]
}

const ProjectList: FC<IProjectList> = ({
  projects = []
}) => {
  return (
    <section className={styles.section}>
      {projects.length ? (
        <ul className={styles.list}>
          {projects.map(project => (
            <li key={project.id} className={styles.listItem}>
              <Project
                {...project}
              />
            </li>
          ))}
        </ul>
      ) : ''}
    </section>
  )
}

export default ProjectList
import { FC } from 'react'

import Project from '../Project'
import styles from './ProjectList.module.scss'
import { IProject } from 'lib/types'

interface IProjectList {
  projects?: IProject[]
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
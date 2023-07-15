
import { FC } from 'react'
import Heading from '../Heading'
import Link from '@/components/Link'
import { IProject } from 'lib/types'
import styles from './Project.module.scss'

const Project: FC<IProject> = ({
  title,
  slug,
  excerpt,
  url,
  year
}) => (
  <div className={styles.project}>
    <Heading level={2} className={styles.heading}>
      <Link className={styles.detailsLink} href={`/projects/${slug}`}>{title}</Link>
    </Heading>
    <p className={styles.year}>Year: {year}</p>
    <p>{excerpt}</p>
    {url ? (
      <Link href={url}>Visit</Link>
    ) : ''}
  </div>
)

export default Project
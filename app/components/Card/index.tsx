import { FC } from 'react'

import Heading from '../Heading'
import styles from './Card.module.scss'
import Link from 'next/link'

interface ICard {
  heading: string
  slug: string
  excerpt: string
}

const Card: FC<ICard> = ({
  slug,
  heading,
  excerpt
}) => (
  <Link href={`/projects/${slug}`} className={styles.card}>
    <div className={styles.copy}>
      <Heading level={2}>{heading}</Heading>
      <p>{excerpt}</p>
    </div>
  </Link>
)

export default Card
import { FC } from 'react'

import Heading from '../Heading'
import styles from './Card.module.scss'
import Link from '@/components/Link'
import Icon from '../Icon'

interface ICard {
  iconCard?: boolean
  image?: {
    src: string
    alt?: string
    width: string | number
    height: string | number
  }
  name: string
  heading: string
  srHeading?: boolean
  content?: string
  cta?: {
    href: string
    text?: string
    target?: '_blank' | '_self'
  }
}

const Card: FC<ICard> = ({
  iconCard,
  name,
  heading,
  srHeading,
  content,
  cta,
}) => (
  <div className={styles.card}>
    <Heading className={styles.heading} level={2}>
      {iconCard && srHeading ? (
        <>
          <span className='sr-only'>{heading}</span>
          <Icon name={name} />
        </>
      ) : heading}
    </Heading>
    <p className={styles.content}>{content}</p>
    {cta?.href && (
      <Link {...(cta?.target ? {target: cta.target} : {})} className={styles.cta} href={cta.href}>
        {cta?.text}
      </Link>
    )}
  </div>
)

export default Card
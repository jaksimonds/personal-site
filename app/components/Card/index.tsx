import { FC } from 'react'

import Heading from '../Heading'
import styles from './Card.module.scss'
import Link from 'next/link'

interface ICard {
  image?: string | {
    src: string
    alt?: string
    width: string | number
    height: string | number
  }
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
  image,
  heading,
  srHeading,
  content,
  cta,
}) => (
  <div className={styles.card}>
    <Heading className={styles.heading} level={2}>
      {typeof image === 'string' && srHeading ? (
        <>
          <span className='sr-only'>{heading}</span>
          <span dangerouslySetInnerHTML={{__html: image}} />
        </>
      ) : heading}
    </Heading>
    <p className={styles.content}>{content}</p>
    {cta?.href && (
      <Link {...(cta?.target ? {target: cta.target} : {})} className={styles.cta} href={cta.href}>
        {cta?.text}
        {cta?.target && cta.target === '_blank' ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#fff'><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg>
        ) : ''}
      </Link>
    )}
  </div>
)

export default Card
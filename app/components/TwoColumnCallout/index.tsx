import Link from 'next/link'
import Image from 'next/image'
import Heading from "../Heading"

import styles from './TwoColumnCallout.module.scss'
import { FC } from 'react'

interface ITwocolumnCallout {
  heading: string
  excerpt: string
  slug: string
  url?: string
  alternate?: boolean
}

const TwoColumnCallout: FC<ITwocolumnCallout> = ({
  heading,
  excerpt,
  slug,
  url,
  alternate
}) => (
  <section className={`${styles.section} ${alternate ? styles.sectionAlt : ''}`}>
    <div className={styles.copy}>
      <Heading level={2}>{heading}</Heading>
      <p className={styles.content}>{excerpt}</p>
      <Link href={`/projects/${slug}`}>
        Read case study
      </Link>
      {url && (
        <Link className={styles.externalLink} href={url} target='_blank'>
          Visit
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#fff'><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg>
        </Link>
      )}
    </div>
    <div className={styles.image}>
      <Image className='img-responsive' src='/temporary/hiebing-homepage.png' alt='' width={1702} height={1067} />
    </div>
  </section>
)

export default TwoColumnCallout
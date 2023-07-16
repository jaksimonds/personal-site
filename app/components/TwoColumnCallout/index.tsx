import Link from '@/components/Link'
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
  thumbnail?: string
}

const TwoColumnCallout: FC<ITwocolumnCallout> = ({
  heading,
  excerpt,
  slug,
  url,
  thumbnail,
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
        <Link
          className={styles.externalLink}
          href={url}
          target='_blank'
        >
          Visit
        </Link>
      )}
    </div>
    {thumbnail && (
      <div className={styles.image}>
        <Image className='img-responsive' src={thumbnail} alt='' width={1702} height={1067} />
      </div>
    )}
  </section>
)

export default TwoColumnCallout
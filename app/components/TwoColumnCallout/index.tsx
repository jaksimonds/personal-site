import Link from '@/components/Link'
import Image from 'next/image'
import Heading from "../Heading"

import styles from './TwoColumnCallout.module.scss'
import { FC } from 'react'

interface ITwocolumnCallout {
  heading?: string
  copy?: string
  slug?: string
  url?: string
  alternate?: boolean
  image?: string
  children?: any
}

const TwoColumnCallout: FC<ITwocolumnCallout> = ({
  heading,
  copy,
  slug,
  url,
  image,
  alternate,
  children
}) => (
  <section className={`${styles.section} ${alternate ? styles.sectionAlt : ''}`}>
    <div className={styles.copy}>
      {heading && <Heading level={2}>{heading}</Heading>}
      {copy && <p className={styles.content}>{copy}</p>}
      {children && <div className={styles.children}>{children}</div>}
      {slug && (
        <Link href={`/projects/${slug}`}>
          Read case study
        </Link>
      )}
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
    {image && (
      <div className={styles.image}>
        <Image className='img-responsive' src={image} alt='' width={1702} height={1067} />
      </div>
    )}
  </section>
)

export default TwoColumnCallout
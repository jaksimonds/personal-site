import React, { FC } from 'react'
import Link from '../Link'
import Image from '../Image'
import Heading from '../Heading'

import styles from './TwoColumnCallout.module.scss'

interface ITwocolumnCallout {
  heading?: string
  headingClass?: string
  copy?: string
  slug?: string
  url?: string
  alternate?: boolean
  image?: string
  children?: any
  loading?: 'lazy' | 'eager'
}

const TwoColumnCallout: FC<ITwocolumnCallout> = ({
  heading,
  headingClass,
  copy,
  slug,
  url,
  image,
  alternate,
  children,
  loading
}) => (
  <section className={`${styles.section} ${alternate ? styles.sectionAlt : ''}`}>
    <div className={styles.copy}>
      {heading && <Heading level={2} className={headingClass || ''}>{heading}</Heading>}
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
        <Image className='img-responsive' src={image} alt='' width={1702} height={1067} loading={loading || 'lazy'} />
      </div>
    )}
  </section>
)

export default TwoColumnCallout
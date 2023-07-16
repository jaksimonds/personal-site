import Heading from '@/components/Heading'
import { FC } from 'react'
import Image from 'next/image'

import styles from './Hero.module.scss'
import Link from '../Link'

interface IHero {
  heading: string
  url?: string
  intro?: string
  image?: string
}

const Hero: FC<IHero> = ({
  heading,
  url,
  intro,
  image,
}) => (
  <section className={styles.section}>
    <div className={styles.copy}>
      <Heading level={1}>{heading}</Heading>
      {url ? (
        <Link className={styles.link} href={url}>View site</Link>
      ) : ''}
      {image ? (
        <div className={styles.image}>
          <Image className='img-responsive' src={image} alt='' width={1920} height={1080} />
        </div>
      ) : ''}
      {intro && <p>{intro}</p>}
    </div>
  </section>
)

export default Hero
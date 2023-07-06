import Heading from '@/components/Heading'
import { FC } from 'react'

import styles from './Hero.module.scss'

interface IHero {
  heading: string
  intro?: string
}

const Hero: FC<IHero> = ({
  heading,
  intro,
}) => (
  <section className={styles.section}>
    <div>
      <Heading level={1}>{heading}</Heading>
      {intro && <p>{intro}</p>}
    </div>
  </section>
)

export default Hero
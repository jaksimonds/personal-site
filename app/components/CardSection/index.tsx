import { FC } from 'react'
import Card from '../Card'
import Heading from '../Heading'

import styles from './CardSection.module.scss'

interface ICardSection {
  heading: string
  cards: {
    id: string
    logo?: string
    label: string
    content?: string
    cta?: {
      href: string
      text?: string
      target?: '_blank' | '_self'
    }
  }[]
}

const CardSection: FC<ICardSection> = ({
  heading,
  cards
}) => (
  <section className={styles.section}>
    <Heading className={styles.heading} level={2}>{heading}</Heading>
    {cards.length && (
      <div className={styles.cards}>
        {cards.map((card) => {
          const {
            id,
            logo,
            label,
            content,
            cta
          } = card

          return (
            <Card
              key={id}
              image={logo}
              srHeading
              heading={label}
              content={content}
              cta={cta}
            />
          )
        })}
      </div>
    )}
  </section>
)

export default CardSection
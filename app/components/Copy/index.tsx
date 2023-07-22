import Heading from '@/components/Heading'
import Link from '@/components/Link'
import Icon from '@/components/Icon'
import styles from './Copy.module.scss'
import { FC } from 'react'

interface ICopy {
  heading?: string
  intro?: string
  children?: any
  link?: {
    href: string
    icon?: string
    text?: string
    target?: '_self' | '_blank'
  }
}

const Copy: FC<ICopy> = ({
  heading,
  intro,
  children,
  link
}) => (
  <section className={styles.section}>
    <div>
      <Heading level={2}>{heading}</Heading>
      {intro ? (
        <p className={styles.intro}>{intro}</p>
      ) : ''}
      {children ? (
        <div className={styles.children}>{children}</div>
      ) : ''}
      {link?.href ? (
        <Link className={styles.link} href={link.href} {...(link?.target ? {
          target: link?.target
        } : {})}>
          {link?.icon ? (
            <Icon name={link.icon} simple />
          ) : ''}
          {link?.text || ''}
        </Link>
      ) : ''}
    </div>
  </section>
)

export default Copy
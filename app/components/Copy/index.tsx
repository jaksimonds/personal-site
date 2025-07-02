import React, { FC } from 'react'
import Heading from '../Heading'
import Link from '../Link'
import Icon from '../Icon'
import styles from './Copy.module.scss'

interface ICopy {
  heading?: string
  headingClass?: string
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
  headingClass,
  intro,
  children,
  link
}) => (
  <section className={styles.section}>
    <div>
      <Heading level={2} className={headingClass || ''}>{heading}</Heading>
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
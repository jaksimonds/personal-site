import React from 'react'
import Link from '../Link'
import Icon from '../Icon'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav aria-label='Footer Navigation'>
        <ul className={styles.list}>
          <li>
            <Link className={styles.socialLink} href='https://github.com/jaksimonds' hideExternal>
              <span className='sr-only'>Find me on GitHub</span>
              <Icon name='github' simple />
            </Link>
          </li>
          <li>
            <Link className={styles.socialLink} href='https://discordapp.com/users/219586181229314048' hideExternal>
              <span className='sr-only'>Find me on Discord</span>
              <Icon name='discord' simple />
            </Link>
          </li>
          <li>
            <Link className={styles.socialLink} href='https://bsky.app/profile/jakobijobi.bsky.social' hideExternal>
              <span className='sr-only'>Find me on BlueSky</span>
              <Icon name='bluesky' simple />
            </Link>
          </li>
          <li>
            <Link className={styles.socialLink} href='https://www.linkedin.com/in/jacksonsimonds/' hideExternal>
              <span className='sr-only'>Find me on LinkdIn</span>
              <Icon name='linkedin' simple />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
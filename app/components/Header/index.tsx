'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { oswald } from 'fonts'
import styles from './Header.module.scss'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className={styles.container}>
      {pathname !== '/' && (
        <Link className={styles.navLink} href={'/'}>
          Home
        </Link>
      )}
      <nav className={styles.nav}>
        <ul className={`${styles.list} ${oswald.className}`}>
          <li>
            <Link className={styles.navLink} href='/projects'>Projects</Link>
          </li>
          <li>
            <Link className={styles.navLink} href='/about'>About</Link>
          </li>
          <li>
            <Link className={styles.navLink} href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
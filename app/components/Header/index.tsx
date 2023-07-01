import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href='/' className={styles.logo}>
        <span className='sr-only'>Logo link back to the homepage</span>
        <Image src='/JakobiJobi.png' alt='' width={529} height={499} className='img-responsive' />
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={styles.navLink} href='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
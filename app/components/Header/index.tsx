import Link from '@/components/Link'
import { oswald } from 'fonts'
import styles from './Header.module.scss'

const Header = () => (
	<header className={styles.container}>
		<Link className={styles.navLink} href={'/'}>
			Home
		</Link>
		<nav className={styles.nav} aria-label="Main Navigation">
			<ul className={`${styles.list} ${oswald.className}`}>
				<li>
					<Link className={styles.navLink} href="/projects">
						Projects
					</Link>
				</li>
				<li>
					<Link className={styles.navLink} href="/about">
						About
					</Link>
				</li>
				<li>
					<Link className={styles.navLink} href="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	</header>
)

export default Header

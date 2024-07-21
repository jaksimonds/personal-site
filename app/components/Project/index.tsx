import { FC } from 'react'
import { Heading, Link, Tag } from '@jsimonds/component-library'
import { IProject } from 'lib/types'
import styles from './Project.module.scss'
import { oswald } from 'fonts'

const Project: FC<IProject> = ({ title, slug, excerpt, url, year, tech }) => (
	<div className={styles.project}>
		<Heading level={2} className={`${styles.heading} ${oswald.className}`}>
			<Link className={styles.detailsLink} href={`/projects/${slug}`}>
				{title}
			</Link>
		</Heading>
		<p className={styles.year}>Year: {year}</p>
		{tech?.length ? (
			<ul className={styles.tags}>
				{tech?.map((item) => {
					const { id, label } = item
					return (
						<li key={id}>
							<Tag label={label} />
						</li>
					)
				})}
			</ul>
		) : (
			''
		)}
		<p className={styles.excerpt}>{excerpt}</p>
		{url ? (
			<Link href={url} className={styles.link}>
				Visit
			</Link>
		) : (
			''
		)}
	</div>
)

export default Project

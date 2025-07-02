import React, { FC } from 'react'

import styles from './Tag.module.scss'

interface ITag {
  label: string
}

const Tag: FC<ITag> = ({ label }) => (
  <small className={styles.tag}>{label}</small>
)

export default Tag
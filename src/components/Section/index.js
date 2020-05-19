import React from 'react'

import styles from './styles.module.css'
import Card from '../Card'

function Section({ title, children, type }) {
  return (
    <Card type={type}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </Card>
  )
}

export default Section

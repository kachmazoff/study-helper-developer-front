import React from 'react'

import styles from './styles.module.css'

function ApiDescription({ type, url, description }) {
  return (
    <div className={styles.row}>
      <div className={`${styles.type} ${styles[`type_${type.toLowerCase()}`]}`}>{type}</div>
      <div className={styles.url}>{url}</div>
      <div>{description}</div>
    </div>
  )
}

export default ApiDescription

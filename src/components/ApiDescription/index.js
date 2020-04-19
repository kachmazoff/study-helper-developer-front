import React from 'react'

import styles from './styles.module.css'

function ApiDescription({ type, url, description }) {
  return (
    <div className={styles.row}>
      {/* <span className={styles[`type_${type.toLowerCase()}`]}>{type}</span> */}
      <div className={`${styles.type} ${styles[`type_${type.toLowerCase()}`]}`}>{type}</div>
      <div className={styles.url}>{url}</div>
      <div>{description}</div>
    </div>
  )
}

export default ApiDescription

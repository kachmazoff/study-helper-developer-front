import React from 'react'

import styles from './styles.module.css'

function Card({ color, children }) {
  let style = {
    background: color ? color : "transparent"
  }
  return <div className={styles.card} style={style}>{children}</div>
}

export default Card

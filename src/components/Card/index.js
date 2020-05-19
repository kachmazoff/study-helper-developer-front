import React from 'react'

import styles from './styles.module.css'

function Card({ color, children, type, onClick}) {
  let typeClassName = "";
  if (type === "dark") typeClassName = styles.card_dark
  else if (type === "light") typeClassName = styles.card_light
  else if (type === "accent") typeClassName = styles.card_accent
  return <div className={`${styles.card} ${typeClassName}`} onClick={onClick}>{children}</div>
}

export default Card

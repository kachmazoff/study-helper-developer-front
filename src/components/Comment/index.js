import React from 'react'

import styles from './styles.module.css'

function Comment({ data }) {
  return (
    <div className={styles.comment}>
      <b>{data.creator.username}: </b>{data.text.split('\n').map((x, index) => <span key={index}>{x}<br /></span>)}
    </div>
  )
}

export default Comment

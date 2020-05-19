import React from 'react'

import styles from './styles.module.css'

function Comment({ data }) {
  // console.log(data)
  // let d = new Date(data.created)
  // let dateStr = `${d.getDate()}.${(d.getMonth() + 1) % 12}.${d.getFullYear()}`
  return (
    <div className={styles.comment}>
      <b>{data.creator.username}: </b>{data.text.split('\n').map((x, index) => <span key={index}>{x}<br /></span>)}
      {/* <br /> */}
      {/* <span>{dateStr}</span> */}
    </div>
  )
}

export default Comment

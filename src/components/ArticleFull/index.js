import React from 'react'

import styles from './styles.module.css'

function ArticleFull({ data, views }) {
  return (
    <div>
      <div className={styles.title}>
        <h3>{data.title}</h3>
        <p>{`${data.type.name}. Автор: ${data.creator.username}.`}
        {
          views && ` Просмотров: ${views}`
        }
        </p>
      </div>
      <div className={styles.content}>
        {
          data.content.split('\n').map((x, index) => <p key={index}>{x}</p>)
        }
      </div>
    </div>
  )
}

export default ArticleFull

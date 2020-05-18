import React from 'react'

import styles from './styles.module.css'
import Card from '../Card'

function ArticleFull({ data, views }) {
  return (
    <Card type="light">
      <div>
        <div className={styles.title}>
          <h2>{data.title}</h2>
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
    </Card>
  )
}

export default ArticleFull

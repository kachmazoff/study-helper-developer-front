import React from 'react'

import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function ArticlePreview({ data }) {
  return (
    <Link to={`/articles/${data.id}`} className={styles.fix}>
      <div className={styles.article}>
        <div className={styles.title}>
          <Link to={`/articles/${data.id}`}>
            {data.title}
          </Link>
        </div>
        <div className={styles.info}>
          {` Автор: ${data.creator.username} `}
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreview

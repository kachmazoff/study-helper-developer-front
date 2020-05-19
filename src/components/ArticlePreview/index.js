import React from 'react'

import { getUsername } from '../../services/authApi'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import TypeLink from '../TypeLink'
import Card from '../Card'

function ArticlePreview({ data }) {
  const username = getUsername()

  return (
    // <Card type="dark">
    <Link to={`/articles/${data.id}`} className={styles.fix}>

      <div className={styles.article}>
        <div className={styles.title}>
          {/* <div> */}
          <Link to={`/articles/${data.id}`}>
            {data.title}
          </Link>
          {/* </div> */}
          {/* {
          username === data.creator.username
          && (
            <span className={styles.editLink}>
            <Link to={`/articles/${data.id}/edit`}>Редактировать</Link>
            </span>
            )
          } */}
        </div>
        <div className={styles.info}>
          {/* <TypeLink data={data.type} /> */}
          {` Автор: ${data.creator.username} `}
        </div>
      </div>
    </Link>
    // </Card>
  )
}

export default ArticlePreview

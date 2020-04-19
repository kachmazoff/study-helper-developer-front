import React from 'react'

function ArticlesList({ data, component: Component }) {
  return (
    <ul>
      {
        data.map(article => (
          <li key={article.id}>
            <Component data={ article }/>
          </li>
        ))
      }
    </ul>
  )
}

export default ArticlesList

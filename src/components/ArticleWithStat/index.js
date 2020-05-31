import React from 'react'

import { Link } from 'react-router-dom'

import { getUsername } from '../../services/authApi'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import FormControl from 'react-bootstrap/FormControl'
import { getArticleViews } from '../../services/articlesApi'
import styles from './styles.module.css'

function ArticleWithStat({ data }) {
  const [views, setViews] = React.useState(null)
  const username = getUsername()

  React.useEffect(() => {
    getArticleViews(data.id)
    .then(setViews)
  }, [data.id])

  return (
    // <div>

    //   <InputGroup className="mb-3">
    //     <InputGroup.Prepend>
    //       <InputGroup.Text>{data.title}</InputGroup.Text>
    //       <InputGroup.Text>0.00</InputGroup.Text>
    //     </InputGroup.Prepend>
    //     <InputGroup.Append>
    //       <Button variant="outline-secondary">Редактировать</Button>
    //     </InputGroup.Append>
    //   </InputGroup>
    // </div>
    <InputGroup className="mb-3">
      <FormControl readOnly value={data.title} className={styles.back_color}/>
      <InputGroup.Append>
        <InputGroup.Text style={{width: '70px'}} className={styles.back_color}>{views}</InputGroup.Text>
        <Button variant="outline-secondary" as={Link} to={`/lab/articles/${data.id}/edit`} className={styles.accent_button}>Редактировать</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default ArticleWithStat

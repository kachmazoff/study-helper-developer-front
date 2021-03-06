import React from 'react'

import { createType } from '../../services/articlesTypesApi'
import styles from './styles.module.css'

function CreateArticleTypeForm() {
  const [name, setName] = React.useState(null)

  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    createType({
      name
    })
  }, [name])

  const onChange = React.useCallback((event) => {
    setName(event.target.value)
  }, [])

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input type="text" value={name} onChange={onChange} placeholder="Название типа"/>
      <input type="submit" value="Создать" disabled={!name} />
    </form>
  )
}

export default CreateArticleTypeForm

import React from 'react'

import { getArticlesTypes } from '../../services/articlesTypesApi'
import { createArticle } from '../../services/articlesApi'
import styles from './styles.module.css'

function CreateArticleForm(props) {
  const [types, setTypes] = React.useState([])
  const [data, setData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    getArticlesTypes()
    .then(res => {
      if (Array.isArray(res)) setTypes(res)
    })
  }, [])

  const onChangeTitle = React.useCallback((event) => {
    const formCopy = { ...data }
    formCopy.title = event.target.value
    setData(formCopy)
  }, [data])

  const onSelect = React.useCallback((event) => {
    const formCopy = { ...data }
    formCopy.type = types[event.target.value]
    
    setData(formCopy)
  }, [data, types])

  const onChangeContent = React.useCallback((event) => {
    const formCopy = { ...data }
    formCopy.content = event.target.value
    setData(formCopy)
  }, [data])

  const onSubmit = React.useCallback((event) => {
    setIsLoading(true)
    event.preventDefault()
    createArticle(data)
    .then(res => {
      console.log(res)
      setIsLoading(false)
    })
    console.log(data)
  }, [data])

  return (
    <form className={styles.form} onSubmit={ onSubmit }>
      <div>
        <input type="text" placeholder="Заголовок" value={ data.title } onChange={ onChangeTitle } required />
        <select required onChange={ onSelect }>
          <option readOnly>Тип</option>
          {
            types.map((type, index) => <option key={ index } value={ index }>{ type.name }</option>)
          }
        </select>
      </div>
      <textarea placeholder="Текст статьи" onChange={ onChangeContent } />
      <input type="submit" value="Создать" disabled={ isLoading }/>
    </form>
  )
}

export default CreateArticleForm

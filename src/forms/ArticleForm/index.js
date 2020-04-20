import React from 'react'

import styles from './styles.module.css'

function ArticleForm({ types, data, actionText, onSubmit }) {
  const [editableData, setEditableData] = React.useState({ ...data })

  React.useEffect(() => {
    setEditableData(data)
  }, [data])

  const onChangeTitle = React.useCallback((event) => {
    const formCopy = { ...editableData }
    formCopy.title = event.target.value
    setEditableData(formCopy)
  }, [editableData])

  const onSelect = React.useCallback((event) => {
    const formCopy = { ...editableData }
    
    // formCopy.type = {
    //   id: event.target.value
    // }
    formCopy.type = types.find(x => x.id == event.target.value)
    setEditableData(formCopy)
  }, [editableData, types])

  const onChangeContent = React.useCallback((event) => {
    const formCopy = { ...editableData }
    formCopy.content = event.target.value
    setEditableData(formCopy)
  }, [editableData])

  const onSubmitLocal = React.useCallback((event) => {
    event.preventDefault()
    onSubmit(editableData)
  }, [editableData, onSubmit])

  return (
    <form className={styles.form} onSubmit={onSubmitLocal}>
      <div>
        <input type="text" placeholder="Заголовок" value={editableData.title} onChange={onChangeTitle} required />
        <select required onChange={onSelect} value={editableData.type && editableData.type.id}>
          <option readOnly>Тип</option>
          {
            types.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)
          }
        </select>
      </div>
      <textarea placeholder="Текст статьи" onChange={onChangeContent} value={editableData.content} />
      <input type="submit" value={actionText} />
    </form>
  )
}

export default ArticleForm

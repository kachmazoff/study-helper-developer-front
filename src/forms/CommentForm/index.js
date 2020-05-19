import React from 'react'

import styles from './styles.module.css'

function CommentForm({onSubmit}) {
  const [text, setText] = React.useState('')

  const onChange = React.useCallback((event) => {
    setText(event.target.value)
  }, [])

  const onSubmitLocal = React.useCallback(() => {
    onSubmit(text)
  }, [onSubmit, text])

  return (
    <form onSubmit={onSubmitLocal} className={styles.form}>
      <textarea placeholder="Комментарий" value={text} onChange={onChange}/>
      <input type="submit" value="Создать"/>
    </form>
  )
}

export default CommentForm

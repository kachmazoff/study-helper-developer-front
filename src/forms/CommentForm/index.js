import React from 'react'

function CommentForm({onSubmit}) {
  const [text, setText] = React.useState('')

  const onChange = React.useCallback((event) => {
    setText(event.target.value)
  }, [])

  const onSubmitLocal = React.useCallback(() => {
    onSubmit(text)
  }, [onSubmit, text])

  return (
    <form onSubmit={onSubmitLocal}>
      <textarea placeholder="Комментарий" value={text} onChange={onChange}/>
      <input type="submit" value="Создать"/>
    </form>
  )
}

export default CommentForm

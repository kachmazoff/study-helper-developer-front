import React from 'react'

import { login } from '../../services/authApi'

function LoginForm() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    login(username, password)
  }, [username, password])

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Логин" required value={ username } onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" required value={ password } onChange={e => setPassword(e.target.value)} />
      <input type="submit" value="Войти" />
    </form>
  )
}

export default LoginForm

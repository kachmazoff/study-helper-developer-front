import React from 'react'

import { login } from '../../services/authApi'
import Button from 'react-bootstrap/Button'

import styles from './styles.module.css'

function LoginForm() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    login(username, password)
  }, [username, password])

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Логин" required value={ username } onChange={e => setUsername(e.target.value)} className={styles.input_text} />
      <input type="password" placeholder="Пароль" required value={ password } onChange={e => setPassword(e.target.value)} className={styles.input_text} />
      <Button type="submit" className={styles.accent_button}>
        Войти
      </Button>
    </form>
  )
}

export default LoginForm

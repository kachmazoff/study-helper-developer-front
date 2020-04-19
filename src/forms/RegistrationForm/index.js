import React from 'react'

import { registration } from '../../services/authApi'

function RegistrationForm(props) {
  const [username, setUsername] = React.useState(null)
  const [pass, setPass] = React.useState(null)
  const [passCopy, setPassCopy] = React.useState(null)

  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    registration(username, pass)
  }, [pass, username])

  const onChangeLogin = React.useCallback((e) => {setUsername(e.target.value)}, [])
  const onChangePass = React.useCallback((e) => {setPass(e.target.value)}, [])
  const onChangePassCopy = React.useCallback((e) => {setPassCopy(e.target.value)}, [])

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Логин" value={username} onChange={onChangeLogin} required />
      <input type="password" placeholder="Пароль" value={pass} onChange={onChangePass} required />
      <input type="password" placeholder="Повторите пароль" value={passCopy} onChange={onChangePassCopy} required />
      <input type="submit" value="Зарегистрироваться" disabled={!username || !pass || pass !== passCopy}/>
    </form>
  )
}

export default RegistrationForm

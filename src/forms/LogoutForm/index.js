import React from 'react'

import { logout } from '../../services/authApi'

function LogoutForm() {
  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    logout()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <input type="submit" value="Выйти"/>
    </form>
  )
}

export default LogoutForm

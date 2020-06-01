import React from 'react'

import { logout } from '../../services/authApi'
import Button from 'react-bootstrap/Button'

import styles from './styles.module.css'

function LogoutForm() {
  const onSubmit = React.useCallback((event) => {
    event.preventDefault()
    logout()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <Button type="submit" className={styles.accent_button}>
        Выйти
      </Button>
    </form>
  )
}

export default LogoutForm

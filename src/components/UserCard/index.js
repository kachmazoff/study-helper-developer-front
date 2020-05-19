import React from 'react'
import Card from '../Card'

import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'
import { isAuthenticated, logout, getUsername } from '../../services/authApi'
import LoginForm from '../../forms/LoginForm'

function UserCard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card type="dark">
      <div className={styles.userInfo} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faUser} size="lg" />
        {
          !isAuthenticated()
            ?
            <span className={styles.username}>Войти</span>
            :
            <span className={styles.username}>{getUsername()}</span>
        }
        {/* @{data.username} */}
        <button onClick={() => setIsOpen(!isOpen)} className={styles.action}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="lg" />
        </button>
      </div>
      <Collapse in={isOpen}>
        <div className={styles.buttons}>
          {
            !isAuthenticated()
              ?
              <LoginForm />
              :
              <Button onClick={logout} className={styles.red_button}>Выйти</Button>
          }
        </div>
      </Collapse>
    </Card>
  )
}

export default UserCard

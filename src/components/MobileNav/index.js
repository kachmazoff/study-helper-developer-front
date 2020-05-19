import React from 'react'

import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faFlask, 
  faEllipsisH, 
  faHeart, 
  faBookOpen 
} from '@fortawesome/free-solid-svg-icons'

function MobileNav() {
  return (
    <div className={styles.menu}>
      <NavLink to="/" exact activeClassName={styles.is_active}>
        <FontAwesomeIcon icon={faHome} size="lg" />
      </NavLink>

      <NavLink to="/articles" exact activeClassName={styles.is_active}>
        <FontAwesomeIcon icon={faBookOpen} size="lg" />
      </NavLink>

      <NavLink to="/favourites" exact activeClassName={styles.is_active}>
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </NavLink>

      <NavLink to="/lab" exact activeClassName={styles.is_active}>
        <FontAwesomeIcon icon={faFlask} size="lg" />
      </NavLink>

      <NavLink to="/account" exact activeClassName={styles.is_active}>
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
      </NavLink>



      {/* <NavLink to="/types">Типы</NavLink> */}
      {/* <FontAwesomeIcon icon={faPlus} size="2x" /> */}
      {/* <NavLink to="/users">Пользователи(404)</NavLink> */}
      {/* <NavLink to="/account">Аккаунт</NavLink> */}
    </div>
  )
}

export default MobileNav

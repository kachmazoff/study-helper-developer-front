import React from 'react'

import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faFlask, 
  faEllipsisH, 
  faHeart, 
  faBookOpen 
} from '@fortawesome/free-solid-svg-icons'

function SideNav() {
  return (
    <div className={styles.menu}>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Link>

      <Link to="/articles">
        <FontAwesomeIcon icon={faBookOpen} size="2x" />
      </Link>

      <Link to="/favourites">
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </Link>

      <Link to="/lab">
        <FontAwesomeIcon icon={faFlask} size="2x" />
      </Link>

      <Link to="/account">
        <FontAwesomeIcon icon={faEllipsisH} size="2x" />
      </Link>



      {/* <Link to="/types">Типы</Link> */}
      {/* <FontAwesomeIcon icon={faPlus} size="2x" /> */}
      {/* <Link to="/users">Пользователи(404)</Link> */}
      {/* <Link to="/account">Аккаунт</Link> */}
    </div>
  )
}

export default SideNav

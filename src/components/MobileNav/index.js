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

function MobileNav() {
  return (
    <div className={styles.menu}>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} size="lg" />
      </Link>

      <Link to="/articles">
        <FontAwesomeIcon icon={faBookOpen} size="lg" />
      </Link>

      <Link to="/favourites">
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </Link>

      <Link to="/lab">
        <FontAwesomeIcon icon={faFlask} size="lg" />
      </Link>

      <Link to="/account">
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
      </Link>



      {/* <Link to="/types">Типы</Link> */}
      {/* <FontAwesomeIcon icon={faPlus} size="2x" /> */}
      {/* <Link to="/users">Пользователи(404)</Link> */}
      {/* <Link to="/account">Аккаунт</Link> */}
    </div>
  )
}

export default MobileNav

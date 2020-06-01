import React from 'react'

import Col from 'react-bootstrap/Col'
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

function SideNav() {
  return (
    <Col lg={1} className="d-none d-lg-block px-0">
      <div className={styles.menu}>
        <NavLink to="/" exact activeClassName={styles.is_active}>
          <FontAwesomeIcon icon={faHome} size="2x" />
        </NavLink>

        <NavLink to="/articles" exact activeClassName={styles.is_active}>
          <FontAwesomeIcon icon={faBookOpen} size="2x" />
        </NavLink>

        <NavLink to="/favourites" exact activeClassName={styles.is_active}> 
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </NavLink>

        <NavLink to="/lab" exact activeClassName={styles.is_active}>
          <FontAwesomeIcon icon={faFlask} size="2x" />
        </NavLink>

        <NavLink to="/account" exact activeClassName={styles.is_active}>
          <FontAwesomeIcon icon={faEllipsisH} size="2x" />
        </NavLink>
      </div>
    </Col >
  )
}

export default SideNav

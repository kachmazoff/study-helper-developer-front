import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

function RightColumn({ children }) {
  return (
    <Col lg={3} className={`d-none d-lg-block pr-0`} >
      <div className={styles.rightColumn}>
        {children}
      </div>
    </Col>
  )
}

export default RightColumn;
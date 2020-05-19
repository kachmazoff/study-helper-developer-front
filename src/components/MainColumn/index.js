import React from 'react'

import Col from 'react-bootstrap/Col'

function MainColumn({ children }) {
  return (
    <Col md={12} lg={9} className="px-3">
      {children}
    </Col>
  )
}

export default MainColumn
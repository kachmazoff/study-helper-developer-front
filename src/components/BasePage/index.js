import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BasePage({ title, children }) {
  return (
    <>
      <Row className="no-gutters">
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="no-gutters">
        {children}
      </Row>
    </>
  )
}

export default BasePage

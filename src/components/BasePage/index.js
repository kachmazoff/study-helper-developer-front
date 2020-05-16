import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BasePage({ title, children }) {
  return (
    <>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        {children}
      </Row>
    </>
  )
}

export default BasePage

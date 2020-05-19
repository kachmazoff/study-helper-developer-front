import React from 'react'

import BasePage from '../../components/BasePage'
import Card from '../../components/Card'
import Row from 'react-bootstrap/Row'
import MainColumn from '../../components/MainColumn'
import Col from 'react-bootstrap/Col'
import RightColumn from '../../components/RightColumn'
import UserCard from '../../components/UserCard'
import AdvertisingCard from '../../components/AdvertisingCard'

function Favourites() {
  return (
    <>
      <Row className="no-gutters">
        <MainColumn>
          <Row>
            <Col>
              <h1>Избранное</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="px-0 px-md-3">
              <p style={{ color: 'gray' }}>Совсем скоро здесь будет кое-что очень крутое...</p>
            </Col>
          </Row>
        </MainColumn>
        <RightColumn>
          <UserCard />
          <AdvertisingCard />
        </RightColumn>
      </Row>
    </>
    // <BasePage title="Избранное">
    //   <p style={{ color: 'gray' }}>Совсем скоро здесь будет кое-что очень крутое...</p>
    // </BasePage>
  )
}

export default Favourites

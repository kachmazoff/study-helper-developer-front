import React from 'react'

import Row from 'react-bootstrap/Row'
import MainColumn from '../../components/MainColumn'
import Col from 'react-bootstrap/Col'
import RightColumn from '../../components/RightColumn'
import UserCard from '../../components/UserCard'
import AdvertisingCard from '../../components/AdvertisingCard'

import ProtectedRoute from '../../HOC/ProtectedRoute'
import FavoriteArticlesView from '../../views/FavoriteArticlesView'

function Favourites() {
  return (
    <Row className="no-gutters">
      <MainColumn>
        <Row>
          <Col>
            <h1>Избранное</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="px-0 px-md-3">
            <ProtectedRoute component={FavoriteArticlesView} />
          </Col>
        </Row>
      </MainColumn>
      <RightColumn>
        <UserCard />
        <AdvertisingCard />
      </RightColumn>
    </Row>
  )
}

export default Favourites

import React from 'react'

import BasePage from '../../components/BasePage'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UserCard from '../../components/UserCard'
import Section from '../../components/Section'
import CommonRecommendationsView from '../../views/CommonRecommendationsView'
import NewArticlesView from '../../views/NewArticlesView'
import { isAuthenticated } from '../../services/authApi'
import LastViewedArticlesView from '../../views/LastViewedArticlesView'
import RightColumn from '../../components/RightColumn'
import MainColumn from '../../components/MainColumn'
import AdvertisingCard from '../../components/AdvertisingCard'

function Main() {
  // <BasePage title="Главная">
  return (
    <>
      <Row className="no-gutters">
        <MainColumn>
          <Row>
            <Col>
              <h1>Главная</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="px-0 px-md-3">
              <Section title="Рекомендуем" type="light">
                <CommonRecommendationsView />
              </Section>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={isAuthenticated() ? 6 : 12} xl={isAuthenticated() ? 6 : 12} className='px-0 px-md-3 mt-4 mt-md-5'>
              <Section title="Новые статьи" type="light">
                <NewArticlesView extended={!isAuthenticated()} />
              </Section>
            </Col>
            {
              isAuthenticated()
              &&
              <Col md={12} lg={6} className='px-0 px-md-3 mt-4 mt-md-5'>
                <Section title="Вы смотрели" type="light">
                  <LastViewedArticlesView />
                </Section>
              </Col>
            }
          </Row>
        </MainColumn>
        <RightColumn>
          <UserCard />
          <AdvertisingCard />
        </RightColumn>
      </Row>
    </>
  )
}

export default Main

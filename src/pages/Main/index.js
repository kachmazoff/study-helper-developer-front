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

function Main() {
  return (
    <BasePage title="Главная">
      <Col md={12} lg={9}>
        <Row>
          <Col lg={12}>
            <Section title="Рекомендуем">
              <CommonRecommendationsView />
            </Section>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={isAuthenticated() ? 6 : 12} xl={isAuthenticated() ? 6 : 12} className='mt-5'>
            <Section title="Новые статьи">
              <NewArticlesView extended={!isAuthenticated()} />
            </Section>
          </Col>
          {
            isAuthenticated()
            &&
            <Col md={12} lg={6} className='mt-5'>
              <Section title="Вы смотрели">
                <LastViewedArticlesView />
              </Section>
            </Col>
          }
        </Row>
      </Col>
      <Col lg={3} className="d-none d-lg-block">
        <UserCard />
      </Col>
    </BasePage>
  )
}

export default Main

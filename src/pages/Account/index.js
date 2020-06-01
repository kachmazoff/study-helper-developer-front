import React from 'react'

import { getAccountInfo } from '../../services/accountApi'
import RegistrationForm from '../../forms/RegistrationForm'
import LoginForm from '../../forms/LoginForm'
import LogoutForm from '../../forms/LogoutForm';
import MainColumn from '../../components/MainColumn';
import Row from 'react-bootstrap/Row';
import RightColumn from '../../components/RightColumn';
import Col from 'react-bootstrap/Col';
import { isAuthenticated } from '../../services/authApi'
import UserCard from '../../components/UserCard'
import AdvertisingCard from '../../components/AdvertisingCard'

function Account(props) {
  const [account, setAccount] = React.useState(null)

  React.useEffect(() => {
    getAccountInfo()
      .then(setAccount)
  }, [])

  return (
    <Row className="no-gutters">
      <MainColumn>
        <Row>
          <Col className="px-0 px-md-3">
            {
              isAuthenticated() ? <h1>Мой профиль</h1> : <h1>Войти</h1>
            }
          </Col>
          <Col className="px-0 px-md-3">
            {
              !isAuthenticated() && <h1>Регистрация</h1>
            }
          </Col>
        </Row>
        {
          isAuthenticated()
            ? <>
              <Row>
                <Col xs={12} md={12} lg={6} xl={6} className="px-0 px-md-3">
                  {
                    !!account && <h3>Вы вошли в систему, как {account.username}</h3>
                  }
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={6} xl={3} className="px-0 px-md-3">
                  <LogoutForm />
                </Col>
              </Row>
            </>
            : <Row>
              <Col className="px-0 px-md-3">
                <LoginForm />
              </Col>
              <Col className="px-0 px-md-3">
                <RegistrationForm />
              </Col>
            </Row>
        }
      </MainColumn>
      <RightColumn>
        <UserCard />
        <AdvertisingCard />
      </RightColumn>
    </Row>
  )
}

export default Account

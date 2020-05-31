import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
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
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [account, setAccount] = React.useState(null)

  React.useEffect(() => {
    getAccountInfo()
      .then(setAccount)
  }, [])

  return (
    <Row>
      <MainColumn>
        <Row>
          <Col>
            {
              isAuthenticated() ? <h1>Мой профиль</h1> : <h1>Войти</h1>
            }
          </Col>
          <Col>
            {
              !isAuthenticated() && <h1>Регистрация</h1>
            }
          </Col>
        </Row>
        {
          isAuthenticated()
          ? <>
          <Row>
            <Col xs={12} md={12} lg={isAuthenticated() ? 6 : 12} xl={isAuthenticated() ? 6 : 12} >
              {
                !!account && <h3>Вы вошли в систему, как { account.username }</h3>
              }
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={isAuthenticated() ? 6 : 12} xl={isAuthenticated() ? 3 : 12} >
              <LogoutForm />
            </Col>
          </Row>
          </>
          : <Row>
            <Col>
              {
                <LoginForm />
              }
            </Col>
            <Col>
              {
                <RegistrationForm />
              }
            </Col>
          </Row>
        }
        
      {/* <main>
        <nav className="additional">
          <Link to="/account">Аккаунт</Link>
          <Link to="/account/login" disabled>Войти</Link>
          <Link to="/account/registration">Регистрация</Link>
          <Link to="/account/logout">Выйти</Link>
        </nav>
        <Switch>
          <Route path="/account/registration">
            {
              !account
                ? <RegistrationForm />
                : <p>{account.username}, Вы уже вошли в систему</p>
            }
          </Route>
          <Route path="/account/login">
            {
              !account
                ? <LoginForm />
                : <p>{account.username}, Вы уже вошли в систему</p>
            }
          </Route>
          <Route path="/account/logout">
            {
              !account
                ? <p>Вы не вошли в систему</p>
                : <LogoutForm />
            }
          </Route>
          <Route path="/account">
            {
              !account
                ? <p>Вы не вошли в систему</p>
                : <AccountInfo data={account} />
            }
          </Route>
        </Switch>
      </main> */}
      </MainColumn>
      <RightColumn>
        <UserCard />
        <AdvertisingCard />
      </RightColumn>
    </Row>
  )
}

export default Account

import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getAccountInfo } from '../../services/accountApi'
import RegistrationForm from '../../forms/RegistrationForm'
import LoginForm from '../../forms/LoginForm'
import AccountInfo from '../../components/AccountInfo';
import LogoutForm from '../../forms/LogoutForm';
import BasePage from '../../components/BasePage'
import Section from '../../components/Section';

function Account(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [account, setAccount] = React.useState(null)

  React.useEffect(() => {
    getAccountInfo()
      .then(setAccount)
  }, [])

  return (
    <BasePage title="Аккаунт">
      <Section title="Вход">

      </Section>
      <main>
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
      </main>
    </BasePage>
  )
}

export default Account

import React from 'react'

function AccountInfo({ data }) {
  return (
    <div>
      <p>Пользователь: <b>{data.username}</b></p>
      <p>Зарегистрирован: <b>{data.created}</b></p>
    </div>
  )
}

export default AccountInfo

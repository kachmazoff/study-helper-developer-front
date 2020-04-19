import React from 'react'

import { Link } from 'react-router-dom'

function TypeLink({ data }) {
  return (
    <span>
      Тип: <Link to={`/articles?type=${data.id}`}>{data.name}</Link>
    </span>
  )
}

export default TypeLink

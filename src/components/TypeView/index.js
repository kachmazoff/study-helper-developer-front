import React from 'react'

import {
  Link
} from "react-router-dom";

function TypeView({ data, readonly }) {
  return (
    <div>
      <p>{ data.name }
      {' '}
      {
        !readonly
        && <Link to={ `/types/${data.id}/edit` }>Редактировать</Link>
      }
      </p>
    </div>
  )
}

TypeView.defaultProps = {
  readonly: false
}

export default TypeView

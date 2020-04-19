import React from 'react'

import endpointsConfig from '../../configs/endpointsConfig'
import ApiDescription from '../../components/ApiDescription'

import styles from './styles.module.css'

function Main(props) {
  return (
    <div>
      <h1>API reference</h1>

      <main>
        <ul className={styles.endpoints}>
          {
            endpointsConfig.map((x, index) => {
              return (
                <li key={index}>
                  <ApiDescription {...x} />
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Main

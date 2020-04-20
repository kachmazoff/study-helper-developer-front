import React from 'react'

import endpointsConfig from '../../configs/endpointsConfig'
import ApiDescription from '../../components/ApiDescription'

import styles from './styles.module.css'

function Main(props) {
  return (
    <div>
      <h1>Подборки</h1>

      <main>
        <p style={{color: 'gray'}}>Совсем скоро здесь будет кое-что очень крутое...</p>
        {/* <ul className={styles.endpoints}>
          {
            endpointsConfig.map((x, index) => {
              return (
                <li key={index}>
                  <ApiDescription {...x} />
                </li>
              )
            })
          }
        </ul> */}
      </main>
    </div>
  )
}

export default Main

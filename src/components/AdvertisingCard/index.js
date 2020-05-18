import React from 'react'
import Section from '../Section'
import Card from '../Card'

import styles from './styles.module.css'

function AdvertisingCard() {
    // <Section title="Реклама" type="accent">
    //   <h4>Реклама</h4>
    // </Section>
  return (
    <Card type="accent">
      <h5 className={styles.title}>Реклама</h5>
      <p className={styles.text}>Тут может быть ваша реклама</p>
    </Card>
  )
}

export default AdvertisingCard
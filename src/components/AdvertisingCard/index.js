import React from 'react'
import Section from '../Section'
import Card from '../Card'

import styles from './styles.module.css'

function AdvertisingCard() {
  return (
    <Card type="accent">
      <h5 className={styles.title}>Реклама</h5>
      {/* <p>Steganography</p> */}
      <p className={styles.text}>Steganography - лучшее приложение для сокрытия информации в изображениях!</p>
      {/* <p className={styles.text}>Тут может быть ваша реклама</p> */}
      <a href="https://play.google.com/store/apps/details?id=com.leonid.steganography" className={styles.link}>Перейти в Google Play</a>
    </Card>
  )
}

export default AdvertisingCard
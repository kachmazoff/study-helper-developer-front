import React from 'react'
import Card from '../Card'

import styles from './styles.module.css'

function AdvertisingCard() {
  return (
    <Card type="accent">
      <h5 className={styles.title}>Реклама</h5>
      <p className={styles.text}>Steganography - лучшее приложение для сокрытия информации в изображениях!</p>
      <a href="https://play.google.com/store/apps/details?id=com.leonid.steganography" className={styles.link} target="_blank" rel="noopener noreferrer">Перейти в Google Play</a>
    </Card>
  )
}

export default AdvertisingCard
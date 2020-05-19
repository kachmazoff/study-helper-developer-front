import React from 'react'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import Section from '../../components/Section'
import styles from './styles.module.css'

function LabView() {
  return (
    <>
      <Section title="Делись знаниями!" type="light">
        <p className={styles.text}>
          Напиши что-нибудь интересеное по любимой теме.
          И, возможно, именно твоя статья поможет кому-то стать умнее!
          А мы поможем тебе сделать максимально качественную статью. Жми!
        </p>
        <div className={styles.actions}>
          <Button as={Link} to="/lab/articles/create" className={styles.accent_button}>Создать статью</Button>
        </div>
      </Section>
      <br />
      <Section title="Анализируй качество своих статей" type="light">
        <p className={styles.text}>
          Мы предоставляем тебе возмоность для аналитики качества статей.
          Также мы надеемся, что на основе этой информации ты будешь работать над улучшением своего материала.
          Жми, чтобы просмотреть или редактировать свои статьи!
        </p>
        <div className={styles.actions}>
          <Button as={Link} to="/lab/articles/my" className={styles.accent_button}>Мои статьи</Button>
        </div>
      </Section>
      <br />
      <Section title="Придерживайся структуры" type="light">
        <p className={styles.text}>
          Наша система основывается на смысловом разделение информации.
          Правильная структура обеспечивает более точные рекомендации.
          Каждая статья должна иметь корректный тип.
          Если же ты считаешь, что в каталоге типов нет подходящего, можешь создать новый.
        </p>
        <div className={styles.actions}>
          <Button as={Link} to="/lab/types/create" className={styles.accent_button}>Создать тип</Button>
        </div>
      </Section>
    </>
  )
}

export default LabView

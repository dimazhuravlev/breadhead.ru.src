import React from 'react'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './slideArticle.css'

const SlideArticle = () => (
  <article className={styles.slide}>
    <h2 className={styles.title}>
      Сервис для сравнения и бронирования лекарств в аптеках города.
    </h2>
    <div className={styles.text}>
      Мы консультировали клиента, помогая описать бизнес-логику. Спроектировали
      и разработали веб-приложение на React и Android-приложение для аптек.
    </div>
    <div className={styles.icons}>
      <IconLink
        icontype="globe"
        href="https://faster.ru/"
        description="alfa:"
        text="Какое-то длинное описание"
      />
      <IconLink
        icontype="globe"
        href="https://faster.ru/"
        description="beta:"
        text="faster.ru"
      />
    </div>
  </article>
)

export default SlideArticle

import React from 'react'
import Descriptor from '@site/features/descriptor'
import AboutText from '../../atoms/AboutText'
import Slider from '@site/features/slider'
import TextBlock from '@site/ui/molecules/TextBlock'
import styles from './about.css'

const About = () => (
  <div className={styles.about}>
    <div>
      <Descriptor casename="Студия" />
    </div>
    <div className={styles.aboutContent}>
      <AboutText>
        Breadhead проектирует и&nbsp;выпускает сервисы и&nbsp;приложения.
        Совершенствует деятельность компаний с&nbsp;помощью технологий.
      </AboutText>
      <Slider className={styles.aboutSlider} />
      <AboutText>
        Мы стремимся к&nbsp;открытой рабочей среде, в&nbsp;которой студия
        и&nbsp;клиент —&nbsp;одна команда. Верим, что такой подход меняет
        отношение к&nbsp;делу и&nbsp;помогает создавать полезные продукты.
      </AboutText>
      <div className={styles.aboutTextBlocks}>
        <TextBlock header="экспертиза">
          Образовательные сервисы / E-commerce / Службы бронирования и доставки
          / Инструменты автоматизации / Медиа
        </TextBlock>
        <TextBlock header="практики">
          Образовательные сервисы / E-commerce / Службы бронирования и доставки
          / Инструменты автоматизации / Медиа
        </TextBlock>
        <TextBlock header="технологии">
          Образовательные сервисы / E-commerce / Службы бронирования и доставки
          / Инструменты автоматизации / Медиа
        </TextBlock>
      </div>
    </div>
  </div>
)

export default About

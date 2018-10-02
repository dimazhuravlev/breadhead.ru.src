import React from 'react'
import Descriptor from '@site/features/descriptor'
import AboutText from '../../atoms/AboutText'
import Slider from '@site/features/slider'
import TextBlock from '@site/ui/molecules/TextBlock'
import { ReactIcon, NodeIcon, SwiftIcon } from '@site/ui/atoms/icons'
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
        и&nbsp;клиент —&nbsp;одна команда. Верим, что такой{' '}
        <a href="#" className={styles.TextBlockLink}>
          подход
        </a>{' '}
        меняет отношение к&nbsp;делу и&nbsp;помогает создавать полезные
        продукты.
      </AboutText>
      <div className={styles.aboutTextBlocks}>
        <TextBlock header="экспертиза">
          Образовательные сервисы / E-commerce / Службы бронирования
          и&nbsp;доставки / Инструменты автоматизации / Медиа
        </TextBlock>

        <TextBlock header="практики">
          Исследования / Бренд-консалтинг (
          <a className={styles.TextBlockLink} href="http://fullfort.agency/">
            Fullfort
          </a>
          ) / Дизайн, проектирование / Веб +&nbsp;мобильная разработка
        </TextBlock>

        <TextBlock
          header="технологии"
          icon1={<ReactIcon />}
          icon2={<NodeIcon />}
          icon3={<SwiftIcon />}
        >
          Веб: React, Node.js, PHP, Typescript / iOS: Swift / Android: Kotlin,
          Java
        </TextBlock>
      </div>
    </div>
  </div>
)

export default About

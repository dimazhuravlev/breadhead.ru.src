import React from 'react'
import Descriptor from '@site/features/descriptor'
import AboutText from '../../atoms/AboutText'
import Slider from '@site/features/slider'
import styles from './about.css'

const About = () => (
  <div className={styles.about}>
    <Descriptor casename="Студиявавывкук" />
    <div className={styles.aboutContent}>
      <AboutText>
        Breadhead проектирует и выпускает сервисы и приложения. Совершенствует
        деятельность компаний с помощью технологий.
      </AboutText>
      <Slider />
      <AboutText>
        Мы стремимся к открытой рабочей среде, в которой студия и клиент — одна
        команда. Верим, что такой подход меняет отношение к делу и помогает
        создавать полезные продукты.
      </AboutText>
    </div>
  </div>
)

export default About

import React from 'react'

import Button from '@site/ui/atoms/Button'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const Intro = () => (
  <div className={styles.Headline}>
    <div>
      <IntroTitle />
      <Button value="связь" />
    </div>
    <IntroImage />
  </div>
)

export default Intro

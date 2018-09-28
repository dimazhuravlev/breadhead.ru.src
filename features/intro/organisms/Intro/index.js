import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const Intro = () => (
  <div className={styles.Headline}>
    <div>
      <IntroTitle />
      <Button icon={<ZipIcon />}>связь</Button>
    </div>
    <IntroImage />
  </div>
)

export default Intro

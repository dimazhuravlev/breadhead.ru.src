import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import withScroll from '@site/features/withScroll'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const WithScrollButton = withScroll(Button)

const Intro = () => (
  <div className={styles.intro}>
    <div>
      <IntroTitle />
      <WithScrollButton linkId="footer" icon={<ZipIcon />}>
        связь
      </WithScrollButton>
    </div>
    <IntroImage />
  </div>
)

export default Intro

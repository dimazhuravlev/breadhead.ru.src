import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import withScrollOnClick from '@site/features/withScrollOnClick'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const ScrollButton = withScrollOnClick(Button)

const Intro = () => (
  <div className={styles.intro}>
    <div>
      <IntroTitle />
      <ScrollButton targetscroll="footer" icon={<ZipIcon />}>
        связь
      </ScrollButton>
    </div>
    <IntroImage />
  </div>
)

export default Intro

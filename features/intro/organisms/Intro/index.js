import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import withScrollOnClick from '@site/features/withScrollOnClick'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const ButtonLink = withScrollOnClick(Button)

const Intro = () => (
  <div className={styles.intro}>
    <div>
      <IntroTitle />
      <ButtonLink linkId="footer" icon={<ZipIcon />}>
        связь
      </ButtonLink>
    </div>
    <IntroImage />
  </div>
)

export default Intro

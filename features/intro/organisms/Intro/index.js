import React from 'react'
import { Spring } from 'react-spring'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import withScrollOnClick from '@site/features/withScrollOnClick'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const ScrollButton = withScrollOnClick(Button)

const Intro = () => (
  <Spring
    delay="250"
    from={{ opacity: 0, transform: 'translateY(20px)' }}
    to={{ opacity: 1, transform: 'translateY(0px)' }}
    config={{ tension: 280, friction: 80 }}
  >
    {props => (
      <div style={props} className={styles.intro}>
        <div>
          <IntroTitle />
          <ScrollButton targetscroll="footer" icon={<ZipIcon />}>
            связь
          </ScrollButton>
        </div>
        <IntroImage />
      </div>
    )}
  </Spring>
)

export default Intro

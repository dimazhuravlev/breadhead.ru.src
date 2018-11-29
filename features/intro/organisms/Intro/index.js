import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import withScrollOnClick from '@site/features/withScrollOnClick'
import withNamespaces from '@site/lib/i18n/utils/withNamespaces'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

const ScrollButton = withScrollOnClick(Button)

const Intro = ({ t }) => (
  <div className={styles.intro}>
    <div>
      <IntroTitle />
      <ScrollButton targetscroll="footer" icon={<ZipIcon />}>
        {t('contact-btn')}
      </ScrollButton>
    </div>
    <IntroImage />
  </div>
)

export default withNamespaces(['common'])(Intro)

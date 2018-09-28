import React from 'react'
// import { SiteLinkIcon, ArticleLinkIcon } from '@site/ui/atoms/icons'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './descriptor.css'

const Descriptor = () => (
  <div className={styles.descriptor}>
    <div className={styles.descriptorType}>проект</div>
    <div className={styles.descriptorName}>
      Faster. Новый опыт покупки лекарств
    </div>
    <IconLink
      title="Faster.ru"
      text="ссылка на сайт"
      icon="globe"
      href="https://faster.ru/"
    />
  </div>
)

export default Descriptor

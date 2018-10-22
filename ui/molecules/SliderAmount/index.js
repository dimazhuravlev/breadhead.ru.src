import React from 'react'
import { SliderAmountIcon } from '@site/ui/atoms/icons'
import styles from './sliderAmount.css'

const SliderAmount = ({ slides }) => {
  return (
    <SliderAmountIcon className={styles.amountIcon}>
      <span className={styles.amount}>{slides.length}</span>
    </SliderAmountIcon>
  )
}

export default SliderAmount

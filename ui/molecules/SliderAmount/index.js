import React from 'react'
import { SliderAmountIcon } from '@site/ui/atoms/icons'
import styles from './sliderAmount.css'

const SliderAmount = ({ amount }) => {
  return (
    <SliderAmountIcon className={styles.amountIcon}>
      <span className={styles.amount}>{amount}</span>
    </SliderAmountIcon>
  )
}

export default SliderAmount

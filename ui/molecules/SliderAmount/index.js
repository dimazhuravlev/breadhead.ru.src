import React from 'react'
import Icon from '@site/ui/atoms/icons/Icon'
import styles from './sliderAmount.css'

const SliderAmount = ({ amount }) => {
  return (
    <div className={styles.amountIcon}>
      <Icon name="SliderAmountIcon" />
      <span className={styles.amount}>{amount}</span>
    </div>
  )
}

export default SliderAmount

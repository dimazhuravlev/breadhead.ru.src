import React from 'react'
import cx from 'classnames'
import styles from './NavButton.css'
import Icon from '@site/ui/atoms/icons/Icon'

class NavButton extends React.Component {
  render() {
    const { onClick, className, direction } = this.props

    return (
      <button
        onClick={onClick}
        className={cx(styles.button, className, styles[`button_${direction}`])}
      >
        {direction === 'left' ? (
          <Icon name="SliderArrowLeftIcon" className={styles.leftArrow} />
        ) : (
          <Icon name="SliderArrowRightIcon" className={styles.rightArrow} />
        )}
      </button>
    )
  }
}

export default NavButton

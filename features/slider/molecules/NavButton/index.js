import React from 'react'
import cx from 'classnames'
import styles from './sliderControls.css'
import Icon from '@site/ui/atoms/icons/Icon'

class NavButton extends React.Component {
  render() {
    const { onClick, className, direction } = this.props

    return (
      <div
        className={cx(
          styles.background,
          styles[`wrapper_${direction}`],
          className
        )}
      >
        <button
          onClick={onClick}
          className={cx(styles.button, styles[`button_${direction}`])}
        >
          {direction === 'left' ? (
            <Icon name="SliderArrowLeftIcon" className={styles.leftArrow} />
          ) : (
            <Icon name="SliderArrowRightIcon" className={styles.rightArrow} />
          )}
        </button>
      </div>
    )
  }
}

export default NavButton

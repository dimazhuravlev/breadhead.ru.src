import React from 'react'
import cx from 'classnames'
import styles from './sliderControls.css'
import Icon from '@site/ui/atoms/icons/Icon'
class SliderControls extends React.Component {
  render() {
    const { toggleBack, toggleAhead, className } = this.props

    return (
      <div className={cx(styles.background, className)}>
        <button onClick={toggleBack} className={cx(styles.button, styles.left)}>
          <Icon name="SliderArrowLeftIcon" className={styles.leftArrow} />
        </button>

        <button
          onClick={toggleAhead}
          className={cx(styles.button, styles.right)}
        >
          <Icon name="SliderArrowRightIcon" className={styles.rightArrow} />
        </button>
      </div>
    )
  }
}

export default SliderControls

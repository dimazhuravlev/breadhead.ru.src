import React from 'react'
import NavButton from './atoms/NavButton'
import styles from './SliderControls.css'

const SliderControls = ({ next, prev }) => {
  return (
    <div className={styles.controlsWrapper}>
      <NavButton onClick={prev} direction="left" />
      <NavButton onClick={next} direction="right" />
    </div>
  )
}

export default SliderControls

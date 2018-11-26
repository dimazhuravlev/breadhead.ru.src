import React from 'react'
import SlickSlider from 'react-slick'
import { onlyUpdateForKeys } from 'recompose'
import NavButton from '../../molecules/NavButton'
import styles from './Slider.css'
import './SliderGlobal.css?CSSModulesDisable'

const settings = {
  touchThreshold: 8,
  lazyLoad: 'progressive',
  prevArrow: <NavButton className={styles.navButton} direction="left" />,
  nextArrow: <NavButton className={styles.navButton} direction="right" />,
}

class Slider extends React.Component {
  state = {}
  render() {
    const { forwardRef, ...rest } = this.props

    return <SlickSlider ref={forwardRef} {...rest} {...settings} />
  }
}

export default onlyUpdateForKeys('index')(Slider)

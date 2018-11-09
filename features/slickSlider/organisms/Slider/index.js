import React from 'react'
import SlickSlider from 'react-slick'
import styles from './Slider.css'
import './SliderGlobal.css?CSSModulesDisable'

const settings = {}
class Slider extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.wrapper}>
        <SlickSlider {...settings}>{children}</SlickSlider>
      </div>
    )
  }
}

export default Slider

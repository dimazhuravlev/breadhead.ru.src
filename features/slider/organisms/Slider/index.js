import React from 'react'
import SlickSlider from 'react-slick'
import { getSwipeSpeed } from './helpers/getSwipeSpeed'
import './SliderGlobal.css?CSSModulesDisable'

const settings = {
  touchThreshold: 8,
}

class Slider extends React.Component {
  state = {}
  render() {
    const { forwardRef, width, ...rest } = this.props

    return (
      <SlickSlider
        ref={forwardRef}
        {...rest}
        {...settings}
        speed={getSwipeSpeed(width)}
      />
    )
  }
}

export default Slider

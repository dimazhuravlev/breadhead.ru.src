import React from 'react'
import SlickSlider from 'react-slick'
import './SliderGlobal.css?CSSModulesDisable'

const settings = {
  touchThreshold: 8,
}

class Slider extends React.Component {
  state = {}
  render() {
    const { forwardRef, ...rest } = this.props

    return <SlickSlider ref={forwardRef} {...rest} {...settings} />
  }
}

export default Slider

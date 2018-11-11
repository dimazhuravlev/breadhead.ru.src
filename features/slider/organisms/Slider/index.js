import React from 'react'
import withSizes from 'react-sizes'
import SlickSlider from 'react-slick'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './Slider.css'
import './SliderGlobal.css?CSSModulesDisable'
import NavButton from '../../molecules/NavButton'
import Bar from '../../molecules/Bar'

const settings = {
  prevArrow: <NavButton className={styles.navButton} direction="left" />,
  nextArrow: <NavButton className={styles.navButton} direction="right" />,
}
class Slider extends React.PureComponent {
  state = { index: 0 }

  componentDidUpdate(prevProps, prevState) {
    const { index: prevIndex } = prevState
    const { index } = this.state

    if (prevIndex !== index) {
      this.setState({ index })
    }
  }

  beforeChange = (_, index) => {
    this.setState(() => ({ index }))
  }

  sliderRef = React.createRef()

  render() {
    const { children, height } = this.props
    const { index } = this.state

    return (
      <VisibilitySensor
        minTopValue={height > 600 ? height / 2.5 : height / 2}
        offset={{ top: height / 2 }}
        partialVisibility
      >
        {({ isVisible }) => (
          <div className={styles.wrapper}>
            <Bar
              index={index}
              isVisible={isVisible}
              quantity={children.length}
              onRest={this.sliderRef.slickNext}
            />
            <SlickSlider
              ref={slider => (this.sliderRef = slider)}
              beforeChange={this.beforeChange}
              {...settings}
            >
              {children}
            </SlickSlider>
            <span className={styles.sensor}>
              {isVisible ? 'visible' : 'invisible'}
            </span>
          </div>
        )}
      </VisibilitySensor>
    )
  }
}

const mapSizesToProps = ({ width, height }) => ({
  width,
  height,
})

export default withSizes(mapSizesToProps)(Slider)

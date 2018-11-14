import React from 'react'
import withSizes from 'react-sizes'
import SlickSlider from 'react-slick'
import cx from 'classnames'
import { Gesture } from 'react-with-gesture'
import { templatesMap } from '@site/features/slider/molecules/Templates'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './Slider.css'
import './SliderGlobal.css?CSSModulesDisable'
import SliderAmount from '@site/ui/molecules/SliderAmount'
import NavButton from '../../molecules/NavButton'
import Bar from '../../molecules/Bar'

const settings = {
  prevArrow: <NavButton className={styles.navButton} direction="left" />,
  nextArrow: <NavButton className={styles.navButton} direction="right" />,
}
class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      slideComponents: (props.slides || []).map(
        item => templatesMap[item.type]
      ),
    }
  }

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

  onLinkClick = id => {
    const { slides } = this.props
    const slideIndex = slides.findIndex(slide => slide.id === id)
    if (slideIndex !== -1) {
      this.sliderRef.slickGoTo(slideIndex)
    }
  }

  sliderRef = React.createRef()

  render() {
    const { height, className, slides } = this.props
    const { index, slideComponents } = this.state
    const minTopValue = height > 600 ? height / 2.5 : height / 2
    const offset = { top: height / 2 }

    return (
      <Gesture>
        {({ down }) => (
          <VisibilitySensor
            minTopValue={minTopValue}
            offset={offset}
            partialVisibility
          >
            {({ isVisible }) => (
              <div className={cx(styles.wrapper, className)}>
                <Bar
                  index={index}
                  isVisible={isVisible && !down}
                  quantity={slides.length}
                  onRest={this.sliderRef.slickNext}
                />
                <SliderAmount amount={slides.length} />
                <SlickSlider
                  ref={slider => (this.sliderRef = slider)}
                  beforeChange={this.beforeChange}
                  {...settings}
                >
                  {slideComponents.map((SlideComponent, i) => (
                    <SlideComponent
                      onLinkClick={this.onLinkClick}
                      key={i}
                      {...slides[i].data}
                    />
                  ))}
                </SlickSlider>
              </div>
            )}
          </VisibilitySensor>
        )}
      </Gesture>
    )
  }
}

const mapSizesToProps = ({ width, height }) => ({
  width,
  height,
})

export default withSizes(mapSizesToProps)(Slider)

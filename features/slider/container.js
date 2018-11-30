import React from 'react'
import withSizes from 'react-sizes'
import { compose } from 'recompose'
import cx from 'classnames'
import { Gesture } from 'react-with-gesture'
import { templatesMap } from '@site/features/slider/molecules/Templates'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './index.css'
import SliderAmount from '@site/ui/molecules/SliderAmount'
import Bar from './molecules/Bar'

const Container = Slider => {
  return class extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        index: 0,
        slideComponents: (props.slides || []).map(
          item => templatesMap[item.type]
        )
      }
    }

    componentDidMount() {
      window.addEventListener('touchstart', this.touchStart)
      window.addEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }

    componentWillUnmount() {
      window.removeEventListener('touchstart', this.touchStart)
      window.removeEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }

    touchStart(e) {
      this.firstClientX = e.touches[0].clientX
      this.firstClientY = e.touches[0].clientY
    }

    preventTouch(e) {
      const MIN_VALUE = 5 // threshold

      this.clientX = e.touches[0].clientX - this.firstClientX
      this.clientY = e.touches[0].clientY - this.firstClientY

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(this.clientX) > MIN_VALUE) {
        e.preventDefault()
        e.returnValue = false
        return false
      }
    }

    componentDidUpdate(prevProps, prevState) {
      const { index: prevIndex } = prevState
      const { index } = this.state

      if (prevIndex !== index) {
        this.setState({ index })
      }
    }

    onLinkClick = (id, e) => {
      e.preventDefault()
      e.stopPropagation()
      const { slides } = this.props
      const slideIndex = slides.findIndex(slide => slide.id === id)
      if (slideIndex !== -1) {
        this.setState({ index: slideIndex })
      }
    }

    onSlideClick = e => {
      e.persist()

      const { offsetLeft, offsetWidth } = e.currentTarget

      const xCoord = e.clientX - offsetLeft

      const isRightSide = xCoord - offsetWidth / 2 > 0
      this.setState(({ index }) => ({
        index: isRightSide ? index + 1 : index - 1
      }))
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
              onChange={this.onVisibilityChange}
              minTopValue={minTopValue}
              offset={offset}
              partialVisibility
            >
              {({ isVisible }) => (
                <div
                  onClick={this.onSlideClick}
                  className={cx(styles.wrapper, className)}
                >
                  <Bar
                    index={index}
                    duration={slides[index].duration}
                    isVisible={isVisible && !down}
                    quantity={slides.length}
                    onClick={i => this.setState({ index: i })}
                    onRest={() => {
                      this.setState(({ index }) => ({
                        index: index + 1
                      }))
                    }}
                  />
                  <SliderAmount amount={slides.length} />
                  <Slider index={index}>
                    {slideComponents.map((SlideComponent, i) => (
                      <SlideComponent
                        onLinkClick={this.onLinkClick}
                        key={i}
                        visible={isVisible}
                        active={index === i}
                        {...slides[i].data}
                      />
                    ))}
                  </Slider>
                </div>
              )}
            </VisibilitySensor>
          )}
        </Gesture>
      )
    }
  }
}

const mapSizesToProps = ({ width, height }) => ({
  width,
  height
})

export default compose(
  withSizes(mapSizesToProps),
  Container
)

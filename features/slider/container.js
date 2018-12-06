import React from 'react'
import withSizes from 'react-sizes'
import { compose } from 'recompose'
import cx from 'classnames'
import { Gesture } from 'react-with-gesture'
import { templatesMap } from '@site/features/slider/molecules/Templates'
import KeyHandler from './molecules/KeyHandler'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './index.css'
import SliderAmount from '@site/ui/molecules/SliderAmount'
import ProgressBar from './molecules/ProgressBar'

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
      window.addEventListener('mousedown', this.touchStart)
      window.addEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }

    componentWillUnmount() {
      window.removeEventListener('touchstart', this.touchStart)
      window.removeEventListener('mousedown', this.touchStart)
      window.removeEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }

    componentDidUpdate(prevProps, prevState) {
      const { index: prevIndex } = prevState
      const { index } = this.state

      this.visitedSlides[index] = true

      if (prevIndex !== index) {
        this.setIndex(index)
      }
    }

    touchStart = e => {
      const event = e.touches ? e.touches[0] : e

      this.firstClientX = event.clientX
      this.firstClientY = event.clientY
    }

    setIndex = i => {
      const slidesCount = this.state.slideComponents.length

      this.setState(() => {
        const nextIndex = (i + slidesCount) % slidesCount
        return { index: nextIndex }
      })
    }

    changeSlide = i => {
      if (typeof i === 'undefined') {
        return this.nextSlide()
      } else {
        return this.setIndex(i)
      }
    }

    prevSlide = () => {
      const { index } = this.state
      this.setIndex(index - 1)
    }

    nextSlide = () => {
      const { index } = this.state
      this.setIndex(index + 1)
    }

    preventTouch = e => {
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

    onLinkClick = (id, e) => {
      e.preventDefault()
      e.stopPropagation()
      const { slides } = this.props
      const slideIndex = slides.findIndex(slide => slide.id === id)
      if (slideIndex !== -1) {
        this.setIndex(slideIndex)
      }
    }

    validateClick = e => {
      return (
        Math.sqrt(
          Math.pow(e.clientX - this.firstClientX, 2) +
            Math.pow(e.clientY - this.firstClientY, 2)
        ) < 5
      )
    }

    onSlideClick = e => {
      if (!this.validateClick(e)) return

      e.persist()
      const { offsetLeft, offsetWidth } = e.currentTarget
      const xCoord = e.clientX - offsetLeft

      const isRightSide = xCoord - offsetWidth / 2 > 0
      if (isRightSide) {
        this.nextSlide()
      } else {
        this.prevSlide()
      }
    }

    getPreload = (slideIndex, currentIndex) => {
      if (!isNaN(this.visitedSlides[slideIndex])) {
        return true
      }
      return slideIndex - currentIndex < 2
    }

    visitedSlides = {}

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
                  <ProgressBar
                    index={index}
                    duration={slides[index].duration}
                    isVisible={isVisible && !down}
                    quantity={slides.length}
                    changeSlide={this.changeSlide}
                  />
                  <KeyHandler
                    prevSlide={this.prevSlide}
                    nextSlide={this.nextSlide}
                    isVisible={isVisible}
                  />
                  <SliderAmount amount={slides.length} />
                  <Slider
                    isVisible={isVisible}
                    afterChange={this.setIndex}
                    index={index}
                  >
                    {slideComponents.map((SlideComponent, i) => {
                      const preload = this.getPreload(i, index)
                      return (
                        <SlideComponent
                          onLinkClick={this.onLinkClick}
                          key={i}
                          visible={isVisible}
                          preload={preload}
                          active={index === i}
                          {...slides[i].data}
                        />
                      )
                    })}
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

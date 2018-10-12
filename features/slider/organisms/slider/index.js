import React from 'react'
import { Transition, animated } from 'react-spring'
import { SlidePicture } from '@site/features/templates'
import { SlideArticle } from '@site/features/templates'
import { SlideBrowserPicture } from '@site/features/templates'
import SliderControls from '@site/ui/molecules/SliderControls'
import styles from './slider.css'
import cx from 'classnames'

const pages = [
  style => (
    <animated.div style={{ ...style }}>
      <SlidePicture />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <SlideArticle />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <SlideBrowserPicture />
    </animated.div>
  )
]

class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
    this.sliderControls = React.createRef()
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ index: this.state.index === 2 ? 0 : this.state.index + 1 })
  }

  render() {
    return (
      <div className={cx(styles.Slider, this.props.className)}>
        <div className={styles.main} onClick={this.toggle}>
          <Transition
            native
            from={{ opacity: 0.6, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
          >
            {pages[this.state.index]}
          </Transition>
        </div>
        <SliderControls ref={this.sliderControls} />
      </div>
    )
  }
}

export default Slider

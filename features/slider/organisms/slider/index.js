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
      <SlideArticle />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <SlidePicture />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <SlideBrowserPicture />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <SlidePicture />
    </animated.div>
  )
]

class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { index: 3 }
    this.toggleAhead = this.toggleAhead.bind(this)
    // this.toggleBack = this.toggleBack.bind(this)
  }

  toggleAhead() {
    this.setState({
      index: this.state.index === pages.length - 1 ? 0 : this.state.index + 1
    })
  }

  // toggleBack() {
  //   this.setState({ index: this.state.index === 3 ? 0 : this.state.index - 1 })
  // }

  render() {
    return (
      <div className={cx(styles.slider, this.props.className)}>
        <div className={styles.main} onClick={this.toggleAhead}>
          <Transition
            native
            from={{ opacity: 0.6, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
          >
            {pages[this.state.index]}
          </Transition>
        </div>
        <SliderControls />
      </div>
    )
  }
}

export default Slider

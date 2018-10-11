import React from 'react'
import { Transition, animated } from 'react-spring'
import { SlidePicture } from '@site/features/templates'
import { SlideArticle } from '@site/features/templates'
import { SlideBrowserPicture } from '@site/features/templates'
import styles from './slider.css'
import cx from 'classnames'

// const Slider = ({ className }) => (
//   <div className={cx(styles.Slider, className)}>
//     <SlideBrowserPicture />
//   </div>
// )

const pages = [
  style => (
    <animated.div style={{ ...style}}><SlidePicture/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style}}><SlideArticle/></animated.div>
  ),
  style => (
    <animated.div style={{ ...style}}><SlideBrowserPicture/></animated.div>
  )
]

class Slider extends React.PureComponent {
  
  state = { index: 0 }
  toggle = e =>
    this.setState(state => ({ index: state.index === 2 ? 0 : state.index + 1 }))

  render() {
    return (
      <div className={cx(styles.Slider, this.props.className)}>
        <div className={styles.main} onClick={this.toggle}>
          <Transition
            native
            from={{ opacity: .6, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
          >
            {pages[this.state.index]}
          </Transition>
        </div>
      </div>
    )
  }
}

export default Slider

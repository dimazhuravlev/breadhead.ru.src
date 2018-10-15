import React from 'react'
import { Transition, animated } from 'react-spring'
import { SlidePicture } from '@site/features/templates'
import { SlideArticle } from '@site/features/templates'
import Bar from '../../molecules/Bar'
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

const directions = {
  ahead: { leave: '-50%', from: '100%', name: 'ahead', multiplier: 1 },
  back: { leave: '50%', from: '-100%', name: 'back', multiplier: -1 }
}

class Slider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      direction: directions.ahead.name
    }
    this.toggle = this.toggle.bind(this)
  }

  getNextIndex(index, direction) {
    const listLength = pages.length
    const nextIndex = index + 1 * directions[direction].multiplier

    if (nextIndex < 0) {
      return listLength - 1
    }

    if (nextIndex >= listLength) {
      return 0
    }

    return nextIndex
  }

  toggle(direction) {
    this.setState(({ index }) => ({
      index: this.getNextIndex(index, direction),
      direction
    }))
  }

  render() {
    const { direction, index } = this.state

    return (
      <div className={cx(styles.slider, this.props.className)}>
        <Bar
          onRest={() => this.toggle(directions.ahead.name)}
          index={index}
          quantity={pages.length}
        />
        <div className={styles.main}>
          <Transition
            native
            from={{
              opacity: 0.6,
              transform: `translateX(${directions[direction].from})`
            }}
            enter={{ opacity: 1, transform: 'translateX(0%)' }}
            leave={{
              opacity: 0,
              transform: `translateX(${directions[direction].leave})`
            }}
          >
            {pages[index]}
          </Transition>
        </div>
        <SliderControls
          className={styles.showControls}
          toggleAhead={() => this.toggle(directions.ahead.name)}
          toggleBack={() => this.toggle(directions.back.name)}
        />
      </div>
    )
  }
}

export default Slider

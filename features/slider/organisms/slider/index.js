import React from 'react'
import PropTypes from 'prop-types'
import { Gesture } from 'react-with-gesture'
import { Transition, Spring, animated } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import SliderAmount from '@site/ui/molecules/SliderAmount'
import SliderControls from '@site/ui/molecules/SliderControls'
import Bar from '../../molecules/Bar'
import styles from './slider.css'
import cx from 'classnames'

class Slider extends React.PureComponent {
  render() {
    const {
      isVisible,
      index,
      direction,
      directions,
      slides,
      toggle,
      className,
      data
    } = this.props

    const Slide = slides[index]

    return (
      <div className={cx(styles.slider, className)}>
        <Bar
          isVisible={isVisible}
          onRest={() => toggle(directions.ahead.name)}
          index={index}
          quantity={slides.length}
        />
        <SliderAmount slides={slides} />
        <SliderControls
          className={styles.showControls}
          toggleAhead={() => toggle(directions.ahead.name)}
          toggleBack={() => toggle(directions.back.name)}
        />

        <div>
          <Gesture>
            {({ down, xDelta }) => (
              <Spring
                native
                to={{ x: down ? xDelta : 0 }}
                immediate={name => down && name === 'x'}
              >
                {({ x }) => (
                  <animated.div
                    className={styles.slide}
                    style={{
                      transform: x.interpolate(x => `translateX(${x}px)`)
                    }}
                  >
                    <div>
                      <div
                        className={styles.leftToggle}
                        onClick={() => toggle(directions.back.name)}
                      />
                      <div
                        className={styles.rightToggle}
                        onClick={() => toggle(directions.ahead.name)}
                      />
                      <Transition
                        native
                        initial={{
                          opacity: 0,
                          transform: 'translateX(0%)'
                        }}
                        from={{
                          opacity: 1,
                          transform: `translateX(${directions[direction].from})`
                        }}
                        enter={{
                          opacity: 1,
                          transform: 'translateX(0%)'
                        }}
                        leave={{
                          opacity: 0,
                          transform: `translateX(${
                            directions[direction].leave
                          })`
                        }}
                        impl={TimingAnimation}
                        config={{
                          duration: 600,
                          easing: Easing.bezier(0.645, 0.045, 0.355, 1)
                        }}
                        keys={index}
                      >
                        {style => (
                          <animated.div
                            className={styles.slide}
                            style={{ ...style }}
                          >
                            <Slide {...data} />
                          </animated.div>
                        )}
                      </Transition>
                    </div>
                  </animated.div>
                )}
              </Spring>
            )}
          </Gesture>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  direction: PropTypes.string,
  index: PropTypes.number,
  directions: PropTypes.object,
  slides: PropTypes.array,
  toggle: PropTypes.func,
  data: PropTypes.object
}

export default Slider

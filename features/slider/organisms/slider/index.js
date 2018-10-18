import React from 'react'
import { Transition, animated } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import { SliderAmountIcon } from '@site/ui/atoms/icons'
import SliderControls from '@site/ui/molecules/SliderControls'
import Bar from '../../molecules/Bar'
import styles from './slider.css'
import cx from 'classnames'

class Slider extends React.PureComponent {
  render() {
    const {
      direction,
      index,
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
          onRest={() => toggle(directions.ahead.name)}
          index={index}
          quantity={slides.length}
        />
        <SliderAmountIcon className={styles.amountIcon}>
          <span className={styles.amount}>{slides.length}</span>
        </SliderAmountIcon>
        <SliderControls
          className={styles.showControls}
          toggleAhead={() => toggle(directions.ahead.name)}
          toggleBack={() => toggle(directions.back.name)}
        />
        <div className={styles.main}>
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
              transform: `translateX(${directions[direction].leave})`
            }}
            impl={TimingAnimation}
            config={{
              duration: 600,
              easing: Easing.bezier(0.645, 0.045, 0.355, 1)
            }}
            keys={index}
          >
            {style => (
              <animated.div style={{ ...style }}>
                <Slide {...data} />
              </animated.div>
            )}
          </Transition>
        </div>
      </div>
    )
  }
}

export default Slider

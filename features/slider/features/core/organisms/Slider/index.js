import React from 'react'
import { animated, useSpring, config } from 'react-spring'
import styles from './Slider.css'

const mobileConfig = { tension: 300, friction: 30 }

const SlidesWrapper = ({
  to,
  from,
  immediate,
  width,
  children,
  thresholdWidth
}) => {
  const [{ x }] = useSpring({
    x: to,
    from: from,
    native: true,
    config: width < thresholdWidth ? mobileConfig : config.default,
    immediate
  })

  return (
    <animated.div
      style={{ transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`) }}
      className={styles.slides}
    >
      {React.Children.map(children, (child, i) => (
        <div
          style={{ width: `${width}px`, order: child.props.order }}
          className={styles.slide}
          key={i}
        >
          {child}
        </div>
      ))}
    </animated.div>
  )
}

export default SlidesWrapper

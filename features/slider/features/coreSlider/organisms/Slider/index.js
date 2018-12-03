import React from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './Slider.css'

const SlidesWrapper = (params) => {

  const { to, from, immediate, width, children } = params


  const [{ x }] = useSpring({
    x: to,
    from: from,
    native: true,
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
      )
      )}
    </animated.div>
  )
}


export default SlidesWrapper
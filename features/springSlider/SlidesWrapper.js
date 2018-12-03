import React from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './Slider.css'

const SlidesWrapper = (params) => {

  const { to, from, immediate, width, children } = params

  console.log('WRAPPER', params)

  const [{ x }] = useSpring({
    x: to,
    from: from,
    native: true,
    immediate
  })

  if (immediate) {
    debugger
  }

  return (
    <animated.div
      style={{ transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)}}
      className={styles.slides}
    >
      {children.map((child, i) => {

        return (
          <div
            style={{ width: `${width}px`, order: child.props.order }}
            className={styles.slide}
            key={i}
          >
            <div style={{position: "absolute", top: 0, left: 0, zIndex: 101, fontSize: "300px", color:"#f00"}}>{i}</div>
            {child}
          </div>
        )})}
    </animated.div>
  )
}


export default SlidesWrapper
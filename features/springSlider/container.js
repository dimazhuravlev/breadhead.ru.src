import React, { useState, useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import useComponentSize from '@rehooks/component-size'
import styles from './Slider.css'

const Slider = ({ children }) => {
  const viewPortRef = useRef(null)
  const [handlers, { xDelta, down }] = useGesture()
  const { width: viewportWidth } = useComponentSize(viewPortRef)
  const [xState, setXState] = useState(0)
  const [index, setIndex] = useState(0)

  useEffect(
    () => {
      if (index >= 0) {
        setXState(-(viewportWidth * index))
      }
    },
    [index]
  )

  const prevSlide = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }
  const nextSlide = () => {
    if (index < React.Children.count(children) - 1) {
      setIndex(index + 1)
    }
  }

  const [{ x }] = useSpring({
    x: down ? xDelta + xState : xState,
    from: { x: 0 },
    native: true,
    immediate: name => down && name === 'x'
  })

  useEffect(
    () => {
      if (!down) {
        if (xDelta < -50) {
          nextSlide()
        }

        if (xDelta > 50) {
          prevSlide()
        }
      }
    },
    [down]
  )

  return (
    <div className="App">
      <p>x: {xState}</p>
      <p>viewportWidth: {viewportWidth}</p>
      <p>index: {index}</p>

      <button onClick={prevSlide}>left</button>
      <button onClick={nextSlide}>right</button>

      <div ref={viewPortRef} className={styles.viewPort}>
        <animated.div
          {...handlers}
          style={{
            transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
          }}
          className={styles.slides}
        >
          {React.Children.map(children, (child, i) => (
            <div
              style={{ width: `${viewportWidth}px`, order: i }}
              className={styles.slide}
              key={i}
            >
              {child}
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  )
}

export default Slider

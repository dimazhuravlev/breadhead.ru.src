import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { useGesture } from 'react-with-gesture'
import useComponentSize from '@rehooks/component-size'
import Slider from './organisms/Slider'
import styles from './index.css'
import { getCalcX } from './helpers/getCalcX'
import { getImmediate } from './helpers/getImmediate'
import { Shuffler } from './helpers/Shuffler'
import { getDirection } from './helpers/getDirection'
import { onDiffChange } from './helpers/onDiffChange'
import { onParentIndexChange } from './helpers/onParentIndexChange'
import { onDownChange } from './helpers/onDownChange'
const Container = ({
  children,
  threshold = 0.15,
  index: parentIndex = 0,
  afterChange = () => { }
}) => {

  const viewPortRef = useRef(null)

  const [handlers, { xDelta, down }] = useGesture()
  const { width: viewportWidth } = useComponentSize(viewPortRef)
  const [index, setIndex] = useState(parentIndex)
  const [savedDiff, setDiff] = useState(-1)

  const pxThreshold = threshold * viewportWidth

  const direction = getDirection({ down, xDelta, parentIndex, index })


  const shuffler = new Shuffler({
    width: viewportWidth,
    count: React.Children.count(children),
    selected: index,
    next: down ? parentIndex + direction : parentIndex,
    diff: Math.max(0, savedDiff),
    direction
  })


  useEffect(
    () => {
      afterChange(index)
    },
    [index]
  )

  useLayoutEffect(
    onDiffChange({ savedDiff, shuffler, setDiff }))

  useEffect(
    onParentIndexChange({ index, parentIndex, setIndex }),
    [parentIndex]
  )


  const changeSlide = (d) => {
    setIndex(shuffler.rotateNumber(index + d))
  }

  useEffect(
    onDownChange({ down, xDelta, pxThreshold, changeSlide }),
    [down]
  )

  const immediate = getImmediate({ down, shuffler, savedDiff })

  children = React.Children.map(children, (child, i) => React.cloneElement(child, {
    order: shuffler.getOrder(i)
  })
  )

  const calcX = getCalcX({ down, xDelta, viewportWidth, shuffler, index })

  return (
    <div {...handlers} ref={viewPortRef} className={styles.viewPort}>
      <Slider immediate={immediate} width={viewportWidth} to={calcX} from={{ x: 0 }}>{children}</Slider>
    </div>
  )
}


export default React.memo(Container, ({ index: prevIndex }, { index: nextIndex }) => prevIndex === nextIndex)

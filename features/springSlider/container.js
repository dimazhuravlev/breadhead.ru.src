import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { useGesture } from 'react-with-gesture'
import useComponentSize from '@rehooks/component-size'
import SlidesWrapper from './SlidesWrapper'
import RotateHelper from './RotateHelper'
import styles from './Slider.css'

const Slider = ({
  children,
  threshold = 0.15,
  index: parentIndex = 0,
  afterChange = () => {}
}) => {
  
  const viewPortRef = useRef(null)
  
  const [handlers, { xDelta, down }] = useGesture()
  const { width: viewportWidth } = useComponentSize(viewPortRef)
  const [index, setIndex] = useState(parentIndex)
  const [savedDiff, setDiff] = useState(-1)
  
  const pxThreshold = threshold * viewportWidth
  
  /*const allParams = {
    xDelta, index, savedDiff, viewPortRef, viewportWidth, parentIndex, down
  }
  
  console.log('SLIDER INIT', allParams)*/
  
  const helper = new RotateHelper({
    width: viewportWidth,
    count: React.Children.count(children),
    selected: index,
    next: parentIndex,
    diff: Math.max(0, savedDiff)
  })

  const diff = savedDiff >= 0 ? savedDiff : helper.getDiff()
  
  useEffect(
    () => {
      afterChange(index)
    },
    [index]
  )

  useLayoutEffect(
    () => {
      if (savedDiff !== helper.getDiff()) {
        console.log('SAVE DIFF', helper.getDiff())
        setDiff(helper.getDiff())  
      }
    })

  useEffect(
    () => {
      if (index != parentIndex) {
        setIndex(parentIndex)  
      }

    },
    [parentIndex]
  )

  useEffect(
    () => {
      if (!down) {
        if (xDelta < -pxThreshold) {
          nextSlide()
        }

        if (xDelta > pxThreshold) {
          prevSlide()
        }
      }
    },
    [down]
  )

  const prevSlide = () => {
    setIndex(helper.rotateNumber(index-1))
  }
  const nextSlide = () => {
    setIndex(helper.rotateNumber(index+1))
  }
  
  const immediate = down || (helper.getDiff() !== savedDiff)
  
  children = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      order: helper.getOrder(i)
    })
  })
  
  const calcX = () => {
    const x = (+down) * xDelta - viewportWidth * helper.rotateNumber(index + helper.getDiff())
    return x;
  }

  //console.log('DIFF', { helperDiff: helper.getDiff(), diff, savedDiff, index, parentIndex, immediate, x: calcX()} )
  
  return (
    <div className="App">
      <p>x: {calcX()}</p>
      <p>viewportWidth: {viewportWidth}</p>
      <p>index: {index}</p>
      <p>diff: {diff}</p>

      <div {...handlers} ref={viewPortRef} className={styles.viewPort}>
        <SlidesWrapper immediate={immediate} width={viewportWidth} to={calcX()} from={{ x: 0 }}>{children}</SlidesWrapper>
      </div>
    </div>
  )
}

export default Slider


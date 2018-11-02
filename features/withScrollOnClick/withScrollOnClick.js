import React from 'react'
import { scroller } from 'react-scroll'

const withScrollOnClick = Component => {
  const ComponentWithScroll = props => {
    const scrollTo = props => {
      scroller.scrollTo(props.targetscroll, {
        duration: 1600,
        delay: 0,
        smooth: 'easeInOutQuint'
      })
    }

    return <Component onClick={() => scrollTo(props)} {...props} />
  }

  return ComponentWithScroll
}

export default withScrollOnClick

import React from 'react'

const withScrollOnClick = Component => {
  const ComponentWithScroll = props => {
    const handleClick = () => {
      const target = document.getElementById(props.linkId)
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    return <Component onClick={handleClick} {...props} />
  }

  return ComponentWithScroll
}

export default withScrollOnClick

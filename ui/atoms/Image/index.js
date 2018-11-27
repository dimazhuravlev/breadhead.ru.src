import React from 'react'

const Image = ({ src, ...rest }) => {

  // TODO: require for optimization

  return <img src={src} {...rest} />
}

export default Image

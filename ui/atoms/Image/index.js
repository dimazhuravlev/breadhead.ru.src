import React from 'react'
import requireImage from './requireImage'

const Image = ({ src, ...rest }) => (
  <img src={requireImage(src)} {...rest} />
)

export default Image

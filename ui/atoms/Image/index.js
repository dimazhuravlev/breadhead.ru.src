import React from 'react'
import { requireImage, requireWebp } from '../Image/requireImage'

const Image = ({ src, className, ...rest }) => (
  <picture className={className}>
    <source srcSet={requireWebp(src, 'webp')} type="image/webp" className={className} {...rest} />
    <source srcSet={requireImage(src)} className={className} type="image/jpeg" {...rest} />
    <img src={requireImage(src)} className={className} {...rest} />
  </picture>
)

export default Image

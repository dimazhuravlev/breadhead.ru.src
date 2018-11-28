import React from 'react'
import { requireImage, requireImageCompressed, requireWebp, requireWebpCompressed } from '../Image/requireImage'

const srcSetWebp = (path) => `${requireWebpCompressed(path)} 1x, ${requireWebp(path)} 2x`
const srcSetJpeg = (path) => `${requireImageCompressed(path)} 1x, ${requireImage(path)} 2x`

const Image = ({ src, className, ...rest }) => (
  <picture className={className}>
    <source srcSet={srcSetWebp(src)} type="image/webp" className={className} {...rest} />
    <source srcSet={srcSetJpeg(src)} className={className} type="image/jpeg" {...rest} />

    <img src={requireImage(src)} className={className} {...rest} />
  </picture>
)

export default Image

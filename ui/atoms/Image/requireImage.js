import { flow, dropRight, takeRight } from 'lodash'

const addCompressToPath = flow([
  path => path.split('.'),
  piece => ({
    start: dropRight(piece, 1).join('.'),
    ext: takeRight(piece, 1)
  }),
  ({ start, ext }) => ({
    start: ['jpg', 'png'].includes(ext) ? `${start}-compress` : start,
    ext
  }),
  ({ start, ext }) => `${start}.${ext}`
])

export const requireImageCompressed = path => {
  try {
    return require(`../../../static/img/${addCompressToPath(path)}`)
  } catch (error) {} // eslint-disable-line
}

export const requireWebpCompressed = path => {
  try {
    return require(`../../../static/img/${addCompressToPath(path)}?webp`)
  } catch (error) {} // eslint-disable-line
}

export const requireImage = path => {
  try {
    return require(`../../../static/img/${path}`)
  } catch (error) {} // eslint-disable-line
}

export const requireWebp = path => {
  try {
    return require(`../../../static/img/${path}?webp`)
  } catch (error) {} // eslint-disable-line
}

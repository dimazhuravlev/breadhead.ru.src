import { flow, dropRight, takeRight } from 'lodash'

const addCompressToPath = flow([
  path => path.split('.'),
  piece => ({
    start: dropRight(piece, 1).join('.'),
    ext: takeRight(piece, 1),
  }),
  ({ start, ext }) => ({
    start: ['jpg', 'png'].includes(ext)
      ? `${start}-compress`
      : start,
    ext,
  }),
  ({ start, ext }) => `${start}.${ext}`,
])

export const requireImageCompressed = (path) => require(`../../../static/img/${addCompressToPath(path)}`)

export const requireWebpCompressed = (path) => require(`../../../static/img/${addCompressToPath(path)}?webp`)

export const requireImage = (path) => require(`../../../static/img/${path}`)

export const requireWebp = (path) => require(`../../../static/img/${path}?webp`)

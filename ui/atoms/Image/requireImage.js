import flow from 'lodash/flow'
import dropRight from 'lodash/dropRight'
import takeRight from 'lodash/takeRight'

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

// // // // // // // // // // // // // // // //
// // addCompress without lodash         :   //
// // but it fetched anyway   //
// // // // // // // // // // // // // // // //
// const addCompressToPath = (path) => {
//  
//   const start = path.split('.').slice(0, -1)
//   const ext = path.split('.').pop()
//  
//   return [start + (['jpg', 'png'].includes(ext) ? '-compress' : ''), ext].join('.')
//  
// }

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

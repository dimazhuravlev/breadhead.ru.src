import {
  compose,
  lifecycle,
  toClass,
  setDisplayName,
  getDisplayName,
} from 'recompose'
import { difference } from './diff.js'

export const diffHOC = compose(
  toClass,
  lifecycle({
    componentDidMoun(prevProps) {
      console.log(difference(prevProps, this.props))
    },
  })
)

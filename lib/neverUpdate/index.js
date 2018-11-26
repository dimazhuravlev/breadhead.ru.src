import { shouldUpdate, compose } from 'recompose'

export default compose(shouldUpdate(() => false))

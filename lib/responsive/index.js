import Responsive from 'react-responsive'

export const Desktop = props => (
  <span>
    <Responsive {...props} minWidth={601} />
  </span>
)
export const Mobile = props => (
  <span>
    <Responsive {...props} maxWidth={600} />
  </span>
)
export const Any = props => (
  <span>
    <Responsive {...props} minWidth={0} />
  </span>
)

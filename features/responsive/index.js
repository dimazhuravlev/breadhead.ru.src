import Responsive from 'react-responsive'

export const Desktop = props => <Responsive {...props} minWidth={601} />
export const Mobile = props => <Responsive {...props} maxWidth={600} />

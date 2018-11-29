import React from 'react'

import i18n from './i18n'
import pickByLang from './pickByLang'

const withLang = (Component) =>
  (props) => (
    <Component
      pickByLang={pickByLang(i18n.language)}
      {...props}
    />
  )

export default withLang

import React from 'react'

import i18n from './i18n'

const withLang = (Component) =>
  (props) => <Component lang={i18n.language} {...props} />

export default withLang

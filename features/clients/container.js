import React from 'react'

import withLang from '@site/lib/i18n/withLang'
import { clientsData } from '@site/data/clientsData'

const Container = (Component) => withLang(
  ({ lang, ...rest }) => <Component clientsData={clientsData[lang]} {...rest} />
)

export default Container
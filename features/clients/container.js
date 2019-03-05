import React from 'react'

import withPickByLang from '@site/lib/i18n/withPickByLang'
import { clientsData } from '@site/data/clientsData'

const Container = (Component) => withPickByLang(
  ({ pickByLang, ...rest }) => (
    <Component
      clientsData={pickByLang(clientsData)}
      {...rest}
    />
  )
)

export default Container
import React from 'react'

import withPickByLang from '@site/lib/i18n/withPickByLang'
import { aboutDataDesktop } from '@site/data/aboutDataDesktop'
import { aboutDataMobile } from '@site/data/aboutDataMobile'

const Container = (Component) => withPickByLang(
  ({ pickByLang, ...rest }) => (
    <Component
      aboutDataDesktop={pickByLang(aboutDataDesktop)}
      aboutDataMobile={pickByLang(aboutDataMobile)}
      {...rest}
    />
  )
)

export default Container
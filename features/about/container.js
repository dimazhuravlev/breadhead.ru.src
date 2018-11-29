import React from 'react'

import withLang from '@site/lib/i18n/withLang'
import pickByLang from '@site/lib/i18n/pickByLang'
import { aboutDataDesktop } from '@site/data/aboutDataDesktop'
import { aboutDataMobile } from '@site/data/aboutDataMobile'

const Container = (Component) => withLang(
  ({ lang, ...rest }) => (
    <Component
      aboutDataDesktop={pickByLang(aboutDataDesktop, lang)}
      aboutDataMobile={pickByLang(aboutDataMobile, lang)}
      {...rest}
    />
  )
)

export default Container
import React from 'react'

import withPickByLang from '@site/lib/i18n/withPickByLang'
import { howWeWorkDataDesktop } from '@site/data/howWeWorkDataDesktop'
import { howWeWorkDataMobile } from '@site/data/howWeWorkDataMobile'

const Container = (Component) => withPickByLang(
  ({ pickByLang, ...rest }) => (
    <Component
      howWeWorkDataDesktop={pickByLang(howWeWorkDataDesktop)}
      howWeWorkDataMobile={pickByLang(howWeWorkDataMobile)}
      {...rest}
    />
  )
)

export default Container
import React from 'react'

import withPickByLang from '@site/lib/i18n/withPickByLang'
import { howWeWorkDataDesktop } from '@site/data/howWeWorkDataDesktop'
import { howWeWorkDataMobile } from '@site/data/howWeWorkDataMobile'
import { casesDataDesktop } from '@site/data/casesDataDesktop'
import { casesDataMobile } from '@site/data/casesDataMobile'

const Container = (Component) => withPickByLang(
  ({ pickByLang, ...rest }) => (
    <Component
      howWeWorkDataDesktop={pickByLang(howWeWorkDataDesktop)}
      howWeWorkDataMobile={pickByLang(howWeWorkDataMobile)}
      casesDataDesktop={pickByLang(casesDataDesktop)}
      casesDataMobile={pickByLang(casesDataMobile)}
      {...rest}
    />
  )
)

export default Container
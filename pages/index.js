import React from 'react'

import Home from '@site/features/home'
import Unsupported from '@site/features/unsupported'
import 'babel-polyfill'
import 'normalize.css'
import './index.css'

export default ({ unsupported }) => (
  <div>{unsupported ? <Unsupported /> : <Home />}</div>
)

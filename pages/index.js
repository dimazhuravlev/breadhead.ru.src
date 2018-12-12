import React from 'react'

import Unsupported from '@site/features/unsupported'
import Home from '@site/features/home'
import 'babel-polyfill'
import 'normalize.css'
import './index.css'

export default ({ unsupported }) => (
  <div>{unsupported ? <Unsupported /> : <Home />}</div>
)

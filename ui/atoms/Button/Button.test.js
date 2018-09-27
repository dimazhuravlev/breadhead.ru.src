import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Button from './index'

test('', () => {
  const output = shallow(
    <Button />
  )
  expect(shallowToJson(output)).toMatchSnapshot()
})
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Button from '.'

describe('button ui', () => {
  test('Button renders correctly', () => {
    const output = shallow(<Button />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})

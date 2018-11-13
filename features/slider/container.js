import React from 'react'
import { templatesMap } from '@site/features/slider/molecules/Templates'

const Container = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        slideComponents: (props.slides || []).map(
          item => templatesMap[item.type]
        )
      }
    }

    render() {
      const { slideComponents } = this.state
      const { slides, ...rest } = this.props

      return (
        <Component {...rest}>
          {slideComponents.map((SlideComponent, i) => (
            <SlideComponent key={i} {...slides[i].data} />
          ))}
        </Component>
      )
    }
  }

export default Container

import React from 'react'
import { templatesMap } from '@site/features/slider/molecules/Templates'
// import VisibilitySensor from 'react-visibility-sensor'

const Container = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        index: 0,
        slideComponents: (props.slides || []).map(
          item => templatesMap[item.type]
        ),
      }
    }

    render() {
      const { index, direction, slideComponents } = this.state
      const { className, slides } = this.props

      return (
        <Component>
          {slideComponents.map((SlideComponent, i) => (
            <SlideComponent key={i} {...slides[i].data} />
          ))}
        </Component>
      )
    }
  }

export default Container

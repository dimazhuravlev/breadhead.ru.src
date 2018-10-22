import React from 'react'
import { templatesMap } from '@site/features/slider/molecules/Templates'

const directions = {
  ahead: { leave: '-50%', from: '100%', name: 'ahead', multiplier: 1 },
  back: { leave: '50%', from: '-100%', name: 'back', multiplier: -1 }
}

const Container = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        index: 0,
        direction: directions.ahead.name,
        slideComponents: []
      }
      this.toggle = this.toggle.bind(this)
      this.getNextIndex = this.getNextIndex.bind(this)
    }

    static getDerivedStateFromProps(props) {
      return {
        slideComponents: (props.slides || []).map(
          item => templatesMap[item.type]
        )
      }
    }

    getNextIndex(index, direction) {
      const nextIndex = index + 1 * directions[direction].multiplier

      if (nextIndex < 0) {
        return this.state.slideComponents.length - 1
      }

      if (nextIndex >= this.state.slideComponents.length) {
        return 0
      }

      return nextIndex
    }

    toggle(direction) {
      this.setState(({ index }) => ({
        index: this.getNextIndex(index, direction),
        direction
      }))
    }

    render() {
      const { index, direction, slideComponents } = this.state
      const { className, slides } = this.props

      return (
        <Component
          index={index}
          direction={direction}
          directions={directions}
          slides={slideComponents}
          toggle={this.toggle}
          className={className}
          data={slides[index].data}
          getNextIndex={this.getNextIndex}
        />
      )
    }
  }

export default Container

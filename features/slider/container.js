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
        slides: []
      }
      this.toggle = this.toggle.bind(this)
      this.getNextIndex = this.getNextIndex.bind(this)
    }

    static getDerivedStateFromProps(props) {
      return {
        slides: props.data.map(item => templatesMap[item.type])
      }
    }

    getNextIndex(index, direction) {
      const nextIndex = index + 1 * directions[direction].multiplier

      if (nextIndex < 0) {
        return this.state.slides.length - 1
      }

      if (nextIndex >= this.state.slides.length) {
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
      return (
        <Component
          index={this.state.index}
          direction={this.state.direction}
          slides={this.state.slides}
          getNextIndex={this.getNextIndex}
          toggle={this.toggle}
          className={this.props.className}
          directions={directions}
        />
      )
    }
  }

export default Container

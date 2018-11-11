import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import TimeLine from '../../molecules/Bar/atoms/TimeLine'
import styles from './bar.css'

class Bar extends React.Component {
  state = { key: Math.random() }

  componentDidUpdate(prevProps) {
    if (prevProps.index !== 0 && this.props.index === 0) {
      this.setState({ key: Math.random() })
    }
  }
  render() {
    const { onRest, index, quantity, isVisible } = this.props
    const timeLines = range(quantity)

    return (
      <div key={this.state.key} className={styles.bar}>
        {timeLines.map(timeLine => (
          <TimeLine
            activeIndex={index}
            index={timeLine}
            isVisible={isVisible}
            animate={index === timeLine}
            key={timeLine}
            onRest={timeLine === index && isVisible ? onRest : () => {}}
            active={index >= timeLine}
          />
        ))}
      </div>
    )
  }
}

Bar.propTypes = {
  index: PropTypes.number,
  onRest: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  quantity: PropTypes.number,
}

export default Bar

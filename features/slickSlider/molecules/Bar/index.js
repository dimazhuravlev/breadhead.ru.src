import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import TimeLine from '../../molecules/Bar/atoms/TimeLine'
import styles from './bar.css'

class Bar extends React.Component {
  render() {
    const { onRest, index, quantity } = this.props
    const timeLines = range(quantity)
    return (
      <div className={styles.bar}>
        {timeLines.map(timeLine => (
          <TimeLine
            animate={index === timeLine}
            key={timeLine}
            onRest={timeLine === index && onRest}
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
  quantity: PropTypes.number
}

export default Bar

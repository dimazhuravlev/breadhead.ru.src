import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import TimeLine from '../../molecules/Bar/atoms/TimeLine'
import styles from './bar.css'

class Bar extends React.Component {
  render() {
    const { onRest, index, quantity, isVisible } = this.props
    const timeLines = range(quantity)

    return (
      <div className={styles.bar}>
        {timeLines.map(timeLine => {
          let state
          if (!isVisible && index === timeLine) {
            state = 'frozen'
          } else if (isVisible && index === timeLine) {
            state = 'active'
          } else if (index < timeLine) {
            state = 'empty'
          } else if (index > timeLine) {
            state = 'full'
          }
          return (
            <TimeLine
              index={index}
              onRest={onRest}
              key={timeLine}
              state={state}
            />
          )
        })}
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

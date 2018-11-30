import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './progressElement.css'
import {compose, onlyUpdateForKeys} from 'recompose';

const cx = cn.bind(styles)

class ProgressElement extends React.Component {
  render() {
    const { active, duration, passed, delay, paused } = this.props;
    console.log(this.props.element, this.props);
    return (
      <div className={cx('container', { passed, paused } ) }>
        { active && <div className={cx('progress')} style={{ 
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        }} /> }
      </div>
    )
  }
}

ProgressElement.propTypes = {
  active: PropTypes.bool,
  passed: PropTypes.bool,
  duration: PropTypes.number,
  delay: PropTypes.number
}

const ProgressElementHOC = compose(onlyUpdateForKeys(['active', 'passed', 'paused']))

export default ProgressElementHOC(ProgressElement);
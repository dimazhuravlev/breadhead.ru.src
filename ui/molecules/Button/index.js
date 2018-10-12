import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'
import cx from 'classnames'

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={cx(styles.Button, this.props.className)}
      >
        {this.props.icon}
        <p className={styles.ButtonText}>{this.props.children}</p>
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object
}

export default Button

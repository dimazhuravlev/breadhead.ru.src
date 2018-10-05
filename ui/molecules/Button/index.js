import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'
import cx from 'classnames'

class Button extends React.Component {
  handleClick() {
    alert('Нажалось!')
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={cx(styles.Button, this.props.className)}
      >
        {this.props.icon}
        <div className={styles.ButtonText}>{this.props.children}</div>
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object
}

export default Button

import React from 'react'
import styles from './buttonEng.css'

class ButtonEng extends React.Component {
  constructor(props) {
    super(props)
    this.state = { language: 'en' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      language: state.language === 'ru' ? 'en' : 'ru'
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick} className={styles.button}>
        {this.state.language}
      </button>
    )
  }
}

export default ButtonEng

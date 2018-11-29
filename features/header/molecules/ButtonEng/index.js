import React from 'react'
import i18n from '@site/i18n'
import styles from './buttonEng.css'

class ButtonEng extends React.Component {
  handleClick() {
    i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
  }

  render() {
    return (
      <button onClick={this.handleClick} className={styles.button}>
        {i18n.language}
      </button>
    )
  }
}

export default ButtonEng

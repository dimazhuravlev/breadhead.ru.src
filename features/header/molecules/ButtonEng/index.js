import React from 'react'
import styles from './buttonEng.css'

const ButtonEng = ({ toggleLang, lang }) =>
  <button onClick={toggleLang} className={styles.button}>
    {lang}
  </button>

export default ButtonEng

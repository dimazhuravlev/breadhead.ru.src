import styles from './Button.css'
import * as Icons from '@site/ui/molecules/Icons'

const Button = () => {
  return (
    <button className={styles.Button}>
      <div>
        <Icons.ZipIcon />
        Связь
      </div>
    </button>
  )
}

export default Button

import styles from './button.css'
import * as Icons from '@site/ui/molecules/Icons'

const Button = () => {
  return (
    <button className={styles.Button}>
      <Icons.ZipIcon className={styles.ButtonIcon} />
      <div className={styles.ButtonText}>cвязь</div>
    </button>
  )
}

export default Button

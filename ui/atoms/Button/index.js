import * as styles from './button.css'
import { ZipIcon } from '@site/ui/molecules/Icons'

const Button = () => (
  <button className={styles.Button}>
    <ZipIcon className={styles.ButtonIcon} />
    <div className={styles.ButtonText}>cвязь</div>
  </button>
)

export default Button

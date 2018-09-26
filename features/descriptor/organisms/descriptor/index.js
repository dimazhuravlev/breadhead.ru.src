import { SiteLinkIcon, ArticleLinkIcon } from '@site/ui/molecules/Icons'
import * as styles from './descriptor.css'

const Descriptor = () => (
  <div className={styles.descriptor}>
    <div className={styles.descriptorType}>проект</div>
    <div className={styles.descriptorName}>
      Faster. Новый опыт покупки лекарств
    </div>
    <SiteLinkIcon className={styles.SiteLinkIcon} />
    <ArticleLinkIcon className={styles.ArticleLinkIcon} />
  </div>
)

export default Descriptor

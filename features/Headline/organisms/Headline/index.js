import HeadlineImage from '../../atoms/HeadlineImage'
import Button from '@site/ui/atoms/Button'
import HeadlineTitle from '../../atoms/HeadlineTitle'
import * as styles from './headline.css'

import { ZipIcon } from '@site/ui/molecules/Icons'
import { PlusIcon } from '@site/ui/molecules/Icons'

const Headline = () => {
  return (
    <div className={styles.Headline}>
      <div>
        <HeadlineTitle />
        <Button value="связь" icon={PlusIcon} />
      </div>
      <HeadlineImage />
    </div>
  )
}

export default Headline

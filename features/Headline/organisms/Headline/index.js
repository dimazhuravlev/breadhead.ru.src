import HeadlineImage from '../../atoms/HeadlineImage'
import Button from '@site/ui/atoms/Button'
import HeadlineTitle from '../../atoms/HeadlineTitle'
import * as styles from './headline.css'

const Headline = () => {
  return (
    <div className={styles.Headline}>
      <div>
        <HeadlineTitle />
        <Button />
      </div>
      <HeadlineImage />
    </div>
  )
}

export default Headline

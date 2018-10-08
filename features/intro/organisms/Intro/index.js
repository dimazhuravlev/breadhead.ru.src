import React from 'react'

import Button from '@site/ui/molecules/Button'
import { ZipIcon } from '@site/ui/atoms/icons'
import IntroImage from '../../atoms/IntroImage'
import IntroTitle from '../../atoms/IntroTitle'
import styles from './intro.css'

class Intro extends React.Component {
  handleClick() {
    const footer = document.getElementById('footer')
    footer.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  render() {
    return (
      <div className={styles.intro}>
        <div>
          <IntroTitle />
          <div onClick={this.handleClick}>
            <Button icon={<ZipIcon />}>связь</Button>
          </div>
        </div>
        <IntroImage />
      </div>
    )
  }
}

export default Intro

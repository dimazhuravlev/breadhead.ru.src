import React from 'react'
import Descriptor from '@site/features/descriptor'
import TextBlock from '@site/ui/molecules/TextBlock'
// import { LogoLine } from '@site/ui/atoms/icons'
import styles from './footer.css'

const Footer = () => {
  const date = new Date()

  return (
    <footer>
      <div className={styles.footer}>
        <Descriptor casename="Для связи" />

        <div className={styles.content}>
          <div className={styles.textBlocks}>
            <TextBlock header="офис">
              <a href="https://goo.gl/maps/vud3y2m6k7m" target="_blank">
                Итальянская улица, 14,
              </a>
              <br />
              мансарда №39
              <br />
              Санкт-Петербург, Россия,
              <br />
              191186
            </TextBlock>
            <TextBlock header="контакты">
              <a href="tel:+78129383779">+7 812 938-37-79</a>
              <br />
              <a href="mailto:hello@breadhead.ru">hello@breadhead.ru</a>
            </TextBlock>
            <TextBlock className={styles.textBlockLast} header="мы в соцсетях">
              <a href="https://www.facebook.com/breadhead.ru" target="_blank">
                Facebook
              </a>
              <br />
              <a href="https://medium.com/breadhead-stories" target="_blank">
                Medium
              </a>
              <br />
              <a href="https://www.instagram.com/breadhead.ru" target="_blank">
                Instagram
              </a>
            </TextBlock>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.copyright}>
              {`2009–${date.getFullYear()}`}
            </span>
            <div className={styles.logo}>
              <div className={styles.bg} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

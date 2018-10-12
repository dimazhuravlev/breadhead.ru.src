import React from 'react'
import Descriptor from '@site/features/descriptor'
import TextBlock from '@site/ui/molecules/TextBlock'
import { NON_BREAKING_SPACE } from '@site/constants'
import styles from './footer.css'

const Footer = () => {
  const date = new Date()

  return (
    <footer id="footer">
      <div className={styles.footer}>
        <div className={styles.content}>
          <Descriptor className={styles.caseNameOnly} name="Для связи" />

          <div className={styles.textBlocks}>
            <TextBlock header="офис">
              <a
                href="https://goo.gl/maps/vud3y2m6k7m"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Итальянская улица,${NON_BREAKING_SPACE}14,`}
              </a>
              <br />
              мансарда №39
              <br />
              Санкт-Петербург, Россия, 191186
            </TextBlock>
            <TextBlock header="контакты">
              <a className={styles.phoneLink} href="tel:+78129383779">
                +7 812 938-37-79
              </a>
              <br />
              <a href="mailto:hello@breadhead.ru">hello@breadhead.ru</a>
            </TextBlock>
            <TextBlock header="мы в соцсетях">
              <a
                href="https://www.facebook.com/breadhead.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://medium.com/breadhead-stories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              <br />
              <a
                href="https://www.instagram.com/breadhead.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </TextBlock>
          </div>
        </div>

        <div className={styles.wrapper}>
          <span className={styles.copyright}>
            {`2009–${date.getFullYear()}`}
          </span>

          <div className={styles.logo}>
            <div className={styles.moveBg} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
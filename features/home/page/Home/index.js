import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
// import About from '@site/features/about'
import Button from '@site/ui/molecules/Button'
import Footer from '@site/features/footer'
import { PlusIcon } from '@site/ui/atoms/icons'
import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import styles from './home.css'

const casesData = [
  {
    description: {
      type: 'проект',
      name: 'Faster. Новый опыт покупки лекарств',
      links: [
        {
          icontype: 'globe',
          href: 'https://yamiyami.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.Article,
        data: {
          title:
            'Сервис для сравнения и бронирования лекарств в аптеках города.',
          description: [
            'Мы консультировали клиента, помогая описать бизнес-логику.',
            'Спроектировали и разработали веб-приложение на React и Android-приложение для аптек.'
          ],
          links: [
            {
              icontype: 'globe',
              description: 'beta:',
              href: 'https://faster.ru',
              text: 'faster.ru'
            }
          ]
        }
      },
      {
        type: TemplatesNames.Picture,
        data: {
          src: '/static/img/faster.png'
        }
      },
      {
        type: TemplatesNames.BrowserPicture,
        data: {
          src: '/static/img/FasterScreenShot.png'
        }
      }
    ]
  },

  {
    description: {
      type: 'проект',
      name: 'Yami Yami. Красивая доставка еды',
      links: [
        {
          icontype: 'globe',
          href: 'https://yamiyami.ru'
        },
        {
          icontype: 'article',
          href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.Article,
        data: {
          title:
            'Какая разница сколько часов вам везут еду, если её везут из Yami Yami?',
          description: [
            'Люди приходят в восторг, когда впервые видят сайт Yami Yami. А когда еда приезжает к ним домой, они просто сходят с ума от фирменной упаковки и маленькой машинки Smart, которую хочеться облизывать.'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://yamiyami.ru',
              text: 'Yami Yami'
            },
            {
              icontype: 'article',
              href:
                'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
              text: 'Medium'
            }
          ]
        }
      },
      {
        type: TemplatesNames.Picture,
        data: {
          src: '/static/img/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.BrowserPicture,
        data: {
          src: '/static/img/yamisite.png'
        }
      }
    ]
  }
]

const Home = () => (
  <main>
    <Header />
    <Intro />
    <section className={styles.cases} id="cases">
      {casesData.map(caseData => (
        <Case key={caseData.description.name} {...caseData} />
      ))}
    </section>

    <Button className={styles.plusButton} icon={<PlusIcon />}>
      ещё
    </Button>
    <Clients />
    {/* <About id="about" />
    <Case
      id="howWeWork"
      className={styles.howWeWork}
      type="вики"
      name="Как мы работаем"
      icontype="globe"
      href="https://medium.com/"
    /> */}
    <Footer />
  </main>
)

export default Home

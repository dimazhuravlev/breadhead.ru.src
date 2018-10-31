import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const casesData = [
  {
    description: {
      type: 'проект',
      name: 'Faster. Новый опыт покупки лекарств',
      links: [
        {
          icontype: 'globe',
          href: 'https://faster.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.ArticleDesktop,
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
              href: 'https://.nenaprasno.ru',
              text: 'justask.nenaprasno.ru'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          srcDesktop: '/static/img/faster.png'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          srcDesktop: '/static/img/FasterScreenShot.png',
          srcMobile: '/static/img/faster_mobile.png'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          srcMobileLeft: '/static/img/faster_mobile.png',
          srcMobileCenter: '/static/img/faster_product_page.png',
          srcMobileRight: '/static/img/faster_map.png'
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
        type: TemplatesNames.ArticleDesktop,
        data: {
          title:
            'Какая разница сколько часов вам везут еду, если её везут из Yami Yami?',
          description: [
            'Люди приходят в восторг, когда впервые видят сайт Yami Yami. А когда еда приезжает к ним домой, они просто сходят с ума от фирменной упаковки и маленькой машинки Smart, которую хочеться облизывать.'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://yamiyami.ru/menu',
              text: 'Yami Yami'
            },
            {
              icontype: 'article',
              href: 'https://medium.com/breadhead-stories',
              text: 'Medium'
            }
          ]
        }
      },
      {
        type: TemplatesNames.ArticleWithPhoneDesktop,
        data: {
          title: 'Yami Yami — вкуснее, чем всё',
          description: [
            'Мы консультировали клиента, помогая описать бизнес-логику. Спроектировали и разработали веб-приложение на React и Android-приложение для аптек.'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://.faster.ru',
              text: 'faster.ru'
            },
            {
              icontype: 'article',
              href: 'https://.article.faster.ru',
              text: 'анонс на сайте'
            }
          ],
          srcMobile: '/static/img/faster_map.png'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          srcDesktop: '/static/img/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          srcDesktop: '/static/img/yamisite.png',
          srcMobile: '/static/img/yami_mobile.png'
        }
      }
    ]
  }
]

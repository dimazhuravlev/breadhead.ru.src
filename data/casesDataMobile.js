import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const casesDataMobile = [
  {
    description: {
      type: 'проект',
      name: 'Faster. Новый опыт покупки лекарств'
    },
    slides: [
      {
        type: TemplatesNames.ArticleMobile,
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
        type: TemplatesNames.FrameVideoMobile,
        data: {
          src: '/static/video/map.mov'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/faster.png'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/faster_mobile.png'
        }
      }
    ]
  },

  {
    description: {
      type: 'проект',
      name: 'Yami Yami. Красивая доставка еды'
    },
    slides: [
      {
        type: TemplatesNames.ArticleMobile,
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
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/yami_mobile.png'
        }
      }
    ]
  }
]

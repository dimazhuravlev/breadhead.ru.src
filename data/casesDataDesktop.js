import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const casesDataDesktop = [
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
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/FasterScreenShot.png'
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        data: {
          src: '/static/video/faster_show_popup_1440.mp4'
        }
      },
      // {
      //   type: TemplatesNames.PhonesVideoDesktop,
      //   data: {
      //     srcLeft: '/static/video/catalog.mov',
      //     srcCenter: '/static/video/map.mov',
      //     srcRight: '/static/video/slider_scroll.mov'
      //   }
      // },
      {
        type: TemplatesNames.ArticleDesktop,
        data: {
          title: 'Сервис для бронирования лекарств в аптеках города',
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
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/faster_product_page_desktop.png'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/faster.png'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          srcLeft: '/static/img/faster_mobile.png',
          srcCenter: '/static/img/faster_product_page.png',
          srcRight: '/static/img/faster_map.png'
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
          src: '/static/img/faster_map.png'
        }
      },
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
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/yamisite.png'
        }
      }
    ]
  },

  {
    description: {
      type: 'приложение',
      name: 'Обед Буфет'
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/obedBufet/cover_obedbufet_desktop_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.ArticleWithPhoneDesktop,
        data: {
          title: 'Обед Буфет. Закажи пожрать',
          description: [
            'Проектировали, прототипировали, рисовали, а они уже год программируют. Ну сколько можно ёпта?'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://apple.com',
              text: 'iOS'
            },
            {
              icontype: 'globe',
              href: 'https://android.com',
              text: 'Android'
            }
          ],
          src: '/static/img/obedBufet/0-location_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          srcLeft: '/static/img/obedBufet/1-main_obedbufet_mobile.jpg',
          srcCenter: '/static/img/obedBufet/2-catalog_obedbufet_mobile.jpg',
          srcRight: '/static/img/obedBufet/3-product_obedbufet_mobile.jpg',
          backgroundSrc:
            '/static/img/obedBufet/cover_obedbufet_desktop_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          srcLeft: '/static/img/obedBufet/4-profile_obedbufet_mobile.jpg',
          srcCenter: '/static/img/obedBufet/5-address_obedbufet_mobile.jpg',
          srcRight: '/static/img/obedBufet/6-history_obedbufet_mobile.jpg',
          backgroundColor: 'pink'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/obedBufet/7-rest_obedbufet_desktop-fullscreen.jpg'
        }
      }
    ]
  },

  {
    description: {
      type: 'подборка',
      name: 'E-commerce проекты',
      links: [
        {
          icontype: 'globe',
          href: 'https://yamiyami.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/yamisite.png'
        }
      }
    ]
  },

  {
    description: {
      type: 'проект',
      name: 'Encore Fitness. Качалка за тонну бабла',
      links: [
        {
          icontype: 'globe',
          href: 'https://encorefitness.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/encoreDesktop/cover_encore_desktop_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/1-main_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        data: {
          src:
            '/static/img/encoreDesktop/2-club_encore_desktop_opt/2-club_encore_desktop_opt.mp4'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/3-trainers_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/4-cards_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          srcLeft:
            '/static/img/encoreDesktop/9.1-main_encore_mobile-screen_desktop.jpg',
          srcCenter:
            '/static/img/encoreDesktop/9.2-trainers_encore_mobile-screen_desktop.jpg',
          srcRight:
            '/static/img/encoreDesktop/9.3-schedule_encore_mobile-screen_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        data: {
          src:
            '/static/img/encoreDesktop/5-grouptraining_desktop_opt/5-grouptraining_desktop_opt.mp4'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/6-schedule_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/7-workout_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/encoreDesktop/8-spa_encore_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src:
            '/static/img/encoreDesktop/10_grid-desktop_encore_desktop_full-slide.jpg'
        }
      }
    ]
  },

  {
    description: {
      type: 'проект',
      name: 'Чевостик. И дядя Кузя',
      links: [
        {
          icontype: 'globe',
          href: 'https://chevostik.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          src: '/static/img/chevostik2.png'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          src: '/static/img/chevostik.png'
        }
      }
    ]
  }
]

import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const casesDataMobile = [
  /* FASTER MOBILE CASE */
  {
    description: {
      type: 'проект',
      name: 'Faster. Новый опыт покупки лекарств',
    },
    priority: true,
    slides: [
      {
        type: TemplatesNames.FrameVideoMobile,
        data: {
          src: '/static/img/faster/mobile/scroll—mobile.mp4'
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        data: {
          title:
            'Сервис для сравнения и бронирования лекарств в аптеках города',
          description: [
            'Cравнить цены, найти аналоги и заказать в ближайшей аптеке. Проектировали, рисовали и программировали'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://faster.ru',
              text: 'faster.ru'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/faster/mobile/phone—map—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/faster/mobile/full—product—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/faster/mobile/phone—bag—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/faster/mobile/full—elements—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        data: {
          src: '/static/img/faster/mobile/filter—mobile.mp4'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/faster/mobile/full—tooltip—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/faster/mobile/phone—order—mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/faster/mobile/full—2browsers—mobile.jpg'
        }
      }
    ]
  },

  /* YAMI YAMI MOBILE CASE */
  {
    description: {
      type: 'проект',
      name: 'Yami Yami. Красивая доставка еды',
    },
    slides: [
      {
        type: TemplatesNames.ArticleMobile,
        data: {
          title:
            'Какая разница сколько часов вам везут еду, если её везут из Yami Yami?',
          description: [
            'Люди приходят в восторг, когда впервые видят сайт Yami Yami. А когда еда приезжает к ним домой, они просто сходят с ума от фирменной упаковки и маленькой машинки Smart, которую хочеться облизывать.',
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://yamiyami.ru/menu',
              text: 'Yami Yami',
            },
            {
              icontype: 'article',
              href: 'https://medium.com/breadhead-stories',
              text: 'Medium',
            },
          ],
        },
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/yami_yami/yamiyami.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/yami_yami/yami_mobile.png'
        }
      }
    ]
  },

  /* ENCORE FITNESS MOBILE CASE */
  {
    description: {
      type: 'проект',
      name: 'Encore Fitness. Качалка за тонну бабла'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/cover_encore_mobile_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/encore_fitness/mobile/1-main_encore_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/2-club_encore_mobile/2-club_encore_mobile_opt.mp4'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/3-desktop-screens_encore_mobile_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/4-club-gallery_encore_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/5-schedule-desktop_encore_mobile_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/encore_fitness/mobile/6-schedule_encore_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/7-desktop-screens_encore_mobile_fullslide.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/encore_fitness/mobile/8-trainers_encore_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/9_grid-desktop_encore_mobile_full-slide.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src:
            '/static/img/encore_fitness/mobile/10_phone-mockup_encore_mobile_full-slide.jpg'
        }
      }
    ]
  },

  /* OBED BUFET MOBILE CASE */
  {
    description: {
      type: 'проект',
      name: 'Обед Буфет. Приложушечка'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/obed_bufet/cover_obedbufet_mobile_fullslide.png'
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
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
          ]
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/1-main_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/2-catalog_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/3-product_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/4-profile_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/5-address_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/obed_bufet/6-history_obedbufet_mobile.jpg'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/obed_bufet/7-rest_obedbufet_mobile-fullscreen.png'
        }
      }
    ]
  },

  /* CHEVOSTIK MOBILE CASE */
  {
    description: {
      type: 'проект',
      name: 'Чевостик. И дядя Кузя',
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          src: '/static/img/chevostik/chevostik2.png'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          src: '/static/img/chevostik/chevostik.png'
        }
      }
    ]
  }
]

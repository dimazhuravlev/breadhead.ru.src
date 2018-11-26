import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const casesDataMobile = [
  /* FASTER MOBILE CASE */
  {
    description: {
      type: 'веб-сервис',
      name: 'Faster'
    },
    priority: true,
    slides: [
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 10000,
        data: {
          image: {
            src: '/static/img/faster/mobile/scroll_mobile.mp4',
            preloader: '/static/img/faster/mobile/preloader-scroll_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: 'Новый опыт покупки лекарств',
          description: [
            `Faster — это сервис, который объединяет все аптеки города, находит и${NON_BREAKING_SPACE}бронирует лекарства по${NON_BREAKING_SPACE}лучшим ценам. Мы отвечали за${NON_BREAKING_SPACE}все стороны продукта: от${NON_BREAKING_SPACE}логотипа и${NON_BREAKING_SPACE}цвета кнопок до${NON_BREAKING_SPACE}архитектуры проекта, интеграций с${NON_BREAKING_SPACE}базами данных и${NON_BREAKING_SPACE}разработки приложения для аптек.`,
            'Запуск скоро.'
          ]
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/phone_map_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-phone_map_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/full_product_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-full_product_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/phone_bag_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-phone_bag_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/full_elements_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-full_elements_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 7000,
        data: {
          image: {
            src: '/static/img/faster/mobile/filter_mobile.mp4',
            preloader: '/static/img/faster/mobile/preloader-filter_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/full_tooltip_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-full_tooltip_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/phone_order_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-phone_order_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/faster/mobile/full_2browsers_mobile.jpg',
            preloader:
              '/static/img/faster/mobile/preloader-full_2browsers_mobile.jpg'
          }
        }
      }
    ]
  },

  /* YANGO MOBILE CASE */
  {
    description: {
      type: 'сайт + приложение',
      name: 'Yango'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/cover_mobile_fullslide.jpg',
            preloader:
              '/static/img/yango/mobile/preloader-cover_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: 'Инвестиции через мобильное приложение',
          description: [
            `Yango — сервис для инвестирования в${NON_BREAKING_SPACE}надежные компании. С${NON_BREAKING_SPACE}помощью приложения можно купить облигации Сбербанка, МТС или РЖД и${NON_BREAKING_SPACE}получить доход выше, чем у${NON_BREAKING_SPACE}обычных вкладов. Мы сделали редизайн приложения и${NON_BREAKING_SPACE}запустили первую версию промо-сайта.`
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://yango.pro',
              text: 'yango.pro'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 12000,
        data: {
          image: {
            src: '/static/img/yango/mobile/1_mobile.mp4',
            preloader: '/static/img/yango/mobile/preloader-1_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/2_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-2_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/3_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-3_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 9000,
        data: {
          image: {
            src: '/static/img/yango/mobile/4_mobile.mp4',
            preloader: '/static/img/yango/mobile/preloader-4_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/5_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-5_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/6_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-6_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.VideoMobile,
        duration: 12000,
        data: {
          image: {
            src: '/static/img/yango/mobile/7_mobile_fullslide.mp4',
            preloader:
              '/static/img/yango/mobile/preloader-7_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/8_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-8_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/9_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-9_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/10_mobile.jpg',
            preloader: '/static/img/yango/mobile/preloader-10_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/11_mobile_fullslide.jpg',
            preloader:
              '/static/img/yango/mobile/preloader-11_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/12_mobile_fullslide.jpg',
            preloader:
              '/static/img/yango/mobile/preloader-12_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/yango/mobile/13_mobile_fullslide.jpg',
            preloader:
              '/static/img/yango/mobile/preloader-13_mobile_fullslide.jpg'
          }
        }
      }
    ]
  },

  /* ENCORE FITNESS MOBILE CASE */
  {
    description: {
      type: 'сайт',
      name: 'Encore Fitness'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/mobile/cover_encore_mobile_fullslide.jpg',
            preloader:
              '/static/img/encore_fitness/mobile/preloader-cover_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: `Меняем представление о${NON_BREAKING_SPACE}фитнес-клубах`,
          description: [
            `Мы консультировали разработку концепции бренда и${NON_BREAKING_SPACE}сделали сайт, который стал продолжением уникального клиентского опыта в${NON_BREAKING_SPACE}клубах Encore Fitness —${NON_BREAKING_SPACE}сочетанием функциональности с${NON_BREAKING_SPACE}историей бренда.`
          ],
          links: [
            {
              icontype: 'article',
              href: 'https://encorefitness.ru',
              text: 'читать кейс'
            },
            {
              icontype: 'globe',
              href: 'https://encorefitness.ru',
              text: 'encorefitness.ru'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-1-main_encore_mobile.jpg',
            src: '/static/img/encore_fitness/mobile/1-main_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 10000,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/mobile/2-club_encore_mobile_opt.mp4',
            preloader:
              '/static/img/encore_fitness/mobile/preloader-2-club_encore_mobile_opt.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-3-desktop-screens_encore_mobile_fullslide.jpg',
            src:
              '/static/img/encore_fitness/mobile/3-desktop-screens_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-4-club-gallery_encore_mobile.jpg',
            src:
              '/static/img/encore_fitness/mobile/4-club-gallery_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-5-schedule-desktop_encore_mobile_fullslide.jpg',
            src:
              '/static/img/encore_fitness/mobile/5-schedule-desktop_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-6-schedule_encore_mobile.jpg',
            src:
              '/static/img/encore_fitness/mobile/6-schedule_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-7-desktop-screens_encore_mobile_fullslide.jpg',
            src:
              '/static/img/encore_fitness/mobile/7-desktop-screens_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-8-trainers_encore_mobile.jpg',
            src:
              '/static/img/encore_fitness/mobile/8-trainers_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-9_grid-desktop_encore_mobile_full-slide.jpg',
            src:
              '/static/img/encore_fitness/mobile/9_grid-desktop_encore_mobile_full-slide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              '/static/img/encore_fitness/mobile/preloader-10_phone-mockup_encore_mobile_full-slide.jpg',
            src:
              '/static/img/encore_fitness/mobile/10_phone-mockup_encore_mobile_full-slide.jpg'
          }
        }
      }
    ]
  },

  /* OBED BUFET MOBILE CASE */
  {
    description: {
      type: 'ios + android',
      name: 'ОбедБуфет'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/cover_obedbufet_mobile_fullslide.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-cover_obedbufet_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: 'Дружелюбная доставка домашней еды',
          description: [
            `Заказ еды — простое и${NON_BREAKING_SPACE}понятное действие. Таким мы${NON_BREAKING_SPACE}сделали интерфейс этого приложения. Mинимум рекламы, позитивные цвета и${NON_BREAKING_SPACE}формы, забавные персонажи, легкий тон коммуникации и${NON_BREAKING_SPACE}простота в${NON_BREAKING_SPACE}использовании.`
          ]
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 13000,
        data: {
          src: '/static/img/obed_bufet/1.1-video1_obedbufet-app_desktop.mp4',
          preloader:
            '/static/img/obed_bufet/preloader-1.1-video1_obedbufet-app_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/1.3-catalog_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-1.3-catalog_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src:
              '/static/img/obed_bufet/7-rest_obedbufet_mobile-fullscreen.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-7-rest_obedbufet_mobile-fullscreen.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 13000,
        data: {
          src: '/static/img/obed_bufet/2.1-video2_obedbufet-app_desktop.mp4',
          preloader:
            '/static/img/obed_bufet/preloader-2.1-video2_obedbufet-app_desktop.jpg'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/2.2-product_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-2.2-product_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/2.3-order_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-2.3-order_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/elements_mobile-fullscreen.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-elements_mobile-fullscreen.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/3.1-profile_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-3.1-profile_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/3.2-address_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-3.2-address_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: '/static/img/obed_bufet/3.3-history_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-3.3-history_obedbufet-app_desktop.jpg'
          }
        }
      }
    ]
  }
]

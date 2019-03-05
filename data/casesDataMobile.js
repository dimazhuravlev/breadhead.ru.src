import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const casesDataMobile = [
  /*JUST ASK MOBILE CASE */
  {
    description: {
      type: {
        ru: 'веб-сервис',
        en: 'web application'
      },
      name: {
        ru: 'Просто спросить',
        en: 'Just Ask'
      }
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'just_ask/mobile/cover_oncohelp_mobile.jpg',
            preloader: 'just_ask/mobile/preloader-cover_oncohelp_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: `Консультации с${NON_BREAKING_SPACE}лучшими онкологами`,
            en: `Consultations with the${NON_BREAKING_SPACE}best oncologists`
          },
          description: {
            ru: [
              `«Просто спросить» — сервис консультаций по${NON_BREAKING_SPACE}онкологическим заболеваниям, который бесплатно подскажет как${NON_BREAKING_SPACE}организовать лечение. Проект существует на${NON_BREAKING_SPACE}пожертвования доноров: компаний, фондов и${NON_BREAKING_SPACE}обычных людей.`
            ],
            en: [
              `In early 2019, the Cancer Prevention Foundation and Breadhead launched a${NON_BREAKING_SPACE}new service to help people facing cancer. This is a${NON_BREAKING_SPACE}reference service providing information about the organization of treatment.`
            ]
          },
          links: [
            {
              icontype: 'globe',
              href: 'https://ask.nenaprasno.ru/',
              text: 'ask.nenaprasno.ru'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'just_ask/mobile/2_oncohelp_filling_mobile.jpg',
            preloader: 'just_ask/mobile/preloader-2_oncohelp_filling_mobile.jpg'
          },
          backgroundColor: '#3C54EE'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'just_ask/mobile/img_oncohelp_mobile.jpg',
            preloader: 'just_ask/mobile/preloader-img_oncohelp_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'just_ask/mobile/1_oncohelp_preview_mobile.jpg',
            preloader: 'just_ask/mobile/preloader-1_oncohelp_preview_mobile.jpg'
          },
          backgroundColor: '#3C54EE'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'just_ask/desktop/4.1-client_account_mobile.jpg',
            preloader:
              'just_ask/desktop/preloader-4.1-client_account_mobile.jpg'
          },
          backgroundColor: '#3C54EE'
        }
      }
    ]
  },

  /* FASTER MOBILE CASE */
  {
    description: {
      type: {
        ru: 'веб-сервис',
        en: 'web application'
      },
      name: 'Faster'
    },
    slides: [
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 10000,
        data: {
          image: {
            src: 'faster/mobile/scroll_mobile.mp4',
            preloader: 'faster/mobile/preloader-scroll_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: 'Новый опыт покупки лекарств',
            en: 'New medicine shopping experience'
          },
          description: {
            ru: [
              `Faster — это сервис, который объединяет все аптеки города, находит и${NON_BREAKING_SPACE}бронирует лекарства по${NON_BREAKING_SPACE}лучшим ценам. Мы отвечали за${NON_BREAKING_SPACE}все стороны продукта: от${NON_BREAKING_SPACE}логотипа и${NON_BREAKING_SPACE}цвета кнопок до${NON_BREAKING_SPACE}архитектуры проекта, интеграций с${NON_BREAKING_SPACE}базами данных и${NON_BREAKING_SPACE}разработки приложения для аптек.`,
              'Запуск скоро.'
            ],
            en: [
              'Faster is a service which integrates all pharmacies in the city, searches and orders medicines at their lowest prices. We are responsible for the entire product side: from the logo and button colors to software architecture, integration with databases and pharmacy applications development. Coming soon.'
            ]
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'faster/mobile/phone_map_mobile.jpg',
            preloader: 'faster/mobile/preloader-phone_map_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'faster/mobile/full_product_mobile.jpg',
            preloader: 'faster/mobile/preloader-full_product_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'faster/mobile/phone_bag_mobile.jpg',
            preloader: 'faster/mobile/preloader-phone_bag_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'faster/mobile/full_elements_mobile.jpg',
            preloader: 'faster/mobile/preloader-full_elements_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 7000,
        data: {
          image: {
            src: 'faster/mobile/filter_mobile.mp4',
            preloader: 'faster/mobile/preloader-filter_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'faster/mobile/full_tooltip_mobile.jpg',
            preloader: 'faster/mobile/preloader-full_tooltip_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'faster/mobile/phone_order_mobile.jpg',
            preloader: 'faster/mobile/preloader-phone_order_mobile.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'faster/mobile/full_2browsers_mobile.jpg',
            preloader: 'faster/mobile/preloader-full_2browsers_mobile.jpg'
          }
        }
      }
    ]
  },

  /* ENCORE FITNESS MOBILE CASE */
  {
    description: {
      type: {
        ru: 'сайт',
        en: 'website'
      },
      name: 'Encore Fitness'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'encore_fitness/mobile/cover_encore_mobile_fullslide.jpg',
            preloader:
              'encore_fitness/mobile/preloader-cover_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: `Меняем представление о${NON_BREAKING_SPACE}фитнес-клубах`,
            en: `Changing the idea of${NON_BREAKING_SPACE}fitness clubs`
          },
          description: {
            ru: [
              `Вместе с${NON_BREAKING_SPACE}<a target="_blank" rel="noopener noreferrer" href="http://fullfort.agency/">Fullført</a> мы разработали концепцию бренда и${NON_BREAKING_SPACE}сделали сайт, который стал продолжением уникального клиентского опыта в${NON_BREAKING_SPACE}клубах Encore Fitness —${NON_BREAKING_SPACE}сочетанием функциональности с${NON_BREAKING_SPACE}историей бренда.`
            ],
            en: [
              'Together with <a target="_blank" rel="noopener noreferrer" href="http://fullfort.agency/">Fullført</a>, we developed a brand concept and created a website which comprises the unique customer experience at Encore clubs—a combination of technology, attention to detail and brand story.'
            ]
          },
          links: [
            {
              icontype: 'article',
              href:
                'https://medium.com/@breadhead.ru/encore-fitness-2ea1deba6f70',
              text: {
                ru: 'читать кейс',
                en: 'read more'
              }
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
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-10_phone-mockup_encore_mobile_full-slide.jpg',
            src:
              'encore_fitness/mobile/10_phone-mockup_encore_mobile_full-slide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 10000,
        data: {
          image: {
            src: 'encore_fitness/mobile/2-club_encore_mobile_opt.mp4',
            preloader:
              'encore_fitness/mobile/preloader-2-club_encore_mobile_opt.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-4-club-gallery_encore_mobile.jpg',
            src: 'encore_fitness/mobile/4-club-gallery_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-3-desktop-screens_encore_mobile_fullslide.jpg',
            src:
              'encore_fitness/mobile/3-desktop-screens_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-7-desktop-screens_encore_mobile_fullslide.jpg',
            src:
              'encore_fitness/mobile/7-desktop-screens_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-8-trainers_encore_mobile.jpg',
            src: 'encore_fitness/mobile/8-trainers_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-6-schedule_encore_mobile.jpg',
            src: 'encore_fitness/mobile/6-schedule_encore_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-5-schedule-desktop_encore_mobile_fullslide.jpg',
            src:
              'encore_fitness/mobile/5-schedule-desktop_encore_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            preloader:
              'encore_fitness/mobile/preloader-9_grid-desktop_encore_mobile_full-slide.jpg',
            src:
              'encore_fitness/mobile/9_grid-desktop_encore_mobile_full-slide.jpg'
          }
        }
      }
    ]
  },

  /*CHEVOSTIK MOBILE CASE */
  {
    description: {
      type: {
        ru: 'веб-сервис',
        en: 'web application'
      },
      name: {
        ru: 'Чевостик',
        en: 'Chevostik'
      }
    },
    slides: [
      {
        type: TemplatesNames.VideoMobile,
        duration: 6000,
        data: {
          image: {
            src: 'chevostik/mobile/button_mobile.mp4',
            preloader: 'chevostik/mobile/preview-button_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: 'Современный способ узнать всё обо всём',
            en: `Consultations with the${NON_BREAKING_SPACE}best oncologists`
          },
          description: {
            ru: [
              `Чевостик —${NON_BREAKING_SPACE}главный герой интерактивной энциклопедии, где дети слушают анимированные аудиоуроки, проходят тесты и${NON_BREAKING_SPACE}игры, объединенные одной темой.`
            ],
            en: [
              `Chevostik is${NON_BREAKING_SPACE}the main character of${NON_BREAKING_SPACE}an interactive encyclopedia where children listen to${NON_BREAKING_SPACE}animated audio lessons, pass tests and play games related to${NON_BREAKING_SPACE}the topic of${NON_BREAKING_SPACE}each lesson.`
            ]
          },
          links: [
            {
              icontype: 'globe',
              href: 'https://chevostik.ru/',
              text: 'chevostik.ru'
            },
            {
              icontype: 'article',
              href:
                'https://medium.com/breadhead-stories/%D1%87%D0%B5%D0%B2%D0%BE%D1%81%D1%82%D0%B8%D0%BA-%D0%BA%D0%B0%D0%BA-%D0%BC%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D1%8F%D0%BB%D0%B8-%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-c2720cba7fa9?source=friends_link&sk=a4a5870eac8f6719da266fb619f1fda2',
              text: 'читать кейс'
            }
          ]
        }
      },
      {
        type: TemplatesNames.VideoMobile,
        duration: 5000,
        data: {
          image: {
            src: 'chevostik/mobile/tooltip_map.mp4',
            preloader: 'chevostik/mobile/preview-tooltip_map.jpg'
          }
        }
      },
      {
        type: TemplatesNames.VideoMobile,
        duration: 8000,
        data: {
          image: {
            src: 'chevostik/mobile/lessons_mobile.mp4',
            preloader: 'chevostik/mobile/preview-lessons_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'chevostik/mobile/mobile_icons.jpg',
            preloader: 'chevostik/mobile/preview-mobile_icons.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'chevostik/mobile/2browsers_mobile.jpg',
            preloader: 'chevostik/mobile/preview-2browsers_mobile.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'chevostik/mobile/mobile_chevostik.jpg',
            preloader: 'chevostik/mobile/preview-mobile_chevostik.jpg'
          }
        }
      },
      {
        type: TemplatesNames.VideoMobile,
        duration: 7000,
        data: {
          image: {
            src: 'chevostik/mobile/test_mobile.mp4',
            preloader: 'chevostik/mobile/preview-test_mobile.jpg'
          }
        }
      }
    ]
  },

  /* OBED BUFET MOBILE CASE */
  {
    description: {
      type: {
        ru: 'приложение',
        en: 'mobile app'
      },
      name: {
        ru: 'ОбедБуфет',
        en: 'ObedBufet'
      }
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'obed_bufet/cover_obedbufet_mobile_fullslide.jpg',
            preloader:
              'obed_bufet/preloader-cover_obedbufet_mobile_fullslide.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: `Дружелюбная доставка еды от${NON_BREAKING_SPACE}Ginza Project`,
            en: `Friendly food delivery by${NON_BREAKING_SPACE}Ginza Project`
          },
          description: {
            ru: [
              `Заказ еды — простое и${NON_BREAKING_SPACE}понятное действие. Таким мы${NON_BREAKING_SPACE}сделали интерфейс этого приложения. Mинимум рекламы, позитивные цвета и${NON_BREAKING_SPACE}формы, забавные персонажи, легкий тон коммуникации и${NON_BREAKING_SPACE}простота в${NON_BREAKING_SPACE}использовании.`
            ],
            en: [
              `Ordering food is${NON_BREAKING_SPACE}clear and simple. So is${NON_BREAKING_SPACE}the interface we made for this application: minimized advertising, positive shapes and colors, funny characters, friendly tone of${NON_BREAKING_SPACE}voice and ease of${NON_BREAKING_SPACE}use.`
            ]
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 13000,
        data: {
          image: {
            src: 'obed_bufet/1.1-video1_obedbufet-app_desktop.mp4',
            preloader:
              'obed_bufet/preloader-1.1-video1_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/1.3-catalog_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-1.3-catalog_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'obed_bufet/7-rest_obedbufet_mobile-fullscreen.jpg',
            preloader:
              'obed_bufet/preloader-7-rest_obedbufet_mobile-fullscreen.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 13000,
        data: {
          image: {
            src: 'obed_bufet/2.1-video2_obedbufet-app_desktop.mp4',
            preloader:
              'obed_bufet/preloader-2.1-video2_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/2.2-product_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-2.2-product_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/2.3-order_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-2.3-order_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'obed_bufet/elements_mobile-fullscreen.jpg',
            preloader: 'obed_bufet/preloader-elements_mobile-fullscreen.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/3.1-profile_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-3.1-profile_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/3.2-address_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-3.2-address_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'obed_bufet/3.3-history_obedbufet-app_desktop.jpg',
            preloader:
              'obed_bufet/preloader-3.3-history_obedbufet-app_desktop.jpg'
          },
          backgroundColor: '#FED67D'
        }
      }
    ]
  },

  /* YANGO MOBILE CASE */
  {
    description: {
      type: {
        ru: 'приложение и сайт',
        en: 'app and website'
      },
      name: 'Yango'
    },
    slides: [
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'yango/mobile/cover_mobile_fullslide.jpg',
            preloader: 'yango/mobile/preloader-cover_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: 'Инвестиции через мобильное приложение',
            en: 'Investment via mobile app'
          },
          description: {
            ru: [
              `Yango — сервис для инвестирования в${NON_BREAKING_SPACE}надежные компании. С${NON_BREAKING_SPACE}помощью приложения можно купить облигации Сбербанка, МТС или РЖД и${NON_BREAKING_SPACE}получить доход выше, чем от${NON_BREAKING_SPACE}обычных вкладов. Мы сделали редизайн приложения и${NON_BREAKING_SPACE}запустили промо-сайт.`
            ],
            en: [
              `Yango is a${NON_BREAKING_SPACE}service for investing in${NON_BREAKING_SPACE}reliable companies. Using this application, you can buy bonds of${NON_BREAKING_SPACE}such companies as${NON_BREAKING_SPACE}Sberbank, MTS or RZD and generate an income higher than that from ordinary deposits. We redesigned the application and launched the promo-site.`
            ]
          },
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
            src: 'yango/mobile/1_mobile.mp4',
            preloader: 'yango/mobile/preloader-1_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/2_mobile.jpg',
            preloader: 'yango/mobile/preloader-2_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/3_mobile.jpg',
            preloader: 'yango/mobile/preloader-3_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FrameVideoMobile,
        duration: 9000,
        data: {
          image: {
            src: 'yango/mobile/4_mobile.mp4',
            preloader: 'yango/mobile/preloader-4_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/5_mobile.jpg',
            preloader: 'yango/mobile/preloader-5_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/6_mobile.jpg',
            preloader: 'yango/mobile/preloader-6_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'yango/mobile/13_mobile_fullslide.jpg',
            preloader: 'yango/mobile/preloader-13_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.VideoMobile,
        duration: 12000,
        data: {
          image: {
            src: 'yango/mobile/7_mobile_fullslide.mp4',
            preloader: 'yango/mobile/preloader-7_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/8_mobile.jpg',
            preloader: 'yango/mobile/preloader-8_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/9_mobile.jpg',
            preloader: 'yango/mobile/preloader-9_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.FramePictMobile,
        data: {
          image: {
            src: 'yango/mobile/10_mobile.jpg',
            preloader: 'yango/mobile/preloader-10_mobile.jpg'
          },
          backgroundColor: '#9093a8'
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'yango/mobile/11_mobile_fullslide.jpg',
            preloader: 'yango/mobile/preloader-11_mobile_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureMobile,
        data: {
          image: {
            src: 'yango/mobile/12_mobile_fullslide.jpg',
            preloader: 'yango/mobile/preloader-12_mobile_fullslide.jpg'
          }
        }
      }
    ]
  }
]

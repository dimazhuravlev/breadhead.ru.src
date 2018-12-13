import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const casesDataMobile = [
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
  },

  /*ONCOHELP MOBILE CASE */
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
        type: TemplatesNames.ArticleMobile,
        duration: 12000,
        data: {
          title: {
            ru: `Бесплатные консультации с${NON_BREAKING_SPACE}лучшими онкологами`,
            en: `Free consultations with the${NON_BREAKING_SPACE}best oncologists`
          },
          description: {
            ru: [
              `В${NON_BREAKING_SPACE}начале 2019 года «Фонд профилактики рака» и${NON_BREAKING_SPACE}Breadhead запускают новый сервис помощи людям, столкнувшимся с${NON_BREAKING_SPACE}онкологией. Это справочная об${NON_BREAKING_SPACE}организации лечения и${NON_BREAKING_SPACE}система оценки качества работы медицинских служб.`
            ],
            en: [
              `In early 2019, the Cancer Prevention Foundation and Breadhead are launching a${NON_BREAKING_SPACE}new service to help people facing cancer. This is a${NON_BREAKING_SPACE}reference service providing information about the organization of treatment and the assessment of health care services quality.`
            ]
          },
          links: [
            {
              icontype: 'article',
              href:
                'https://nenaprasno.ru/fund/news-and-events/fond-profilaktiki-raka-pristupil-k-razrabotke-nezavisimoy-spravochnoy-sluzhby-v-onkologii/',
              text: {
                ru: 'анонс',
                en: 'announcement'
              }
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
  }
]

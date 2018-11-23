import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const casesDataDesktop = [
  /* FASTER DESKTOP CASE */
  {
    description: {
      type: 'веб-сервис',
      name: 'Faster',
      links: [
        {
          icontype: 'globe',
          href: 'https://faster.ru'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.VideoDesktop,
        duration: 10000,
        data: {
          src: '/static/img/faster/desktop/full_order_desktop.mp4'
        }
      },
      {
        type: TemplatesNames.ArticleWithPhoneDesktop,
        duration: 12000,
        data: {
          title: 'Сервис для поиска и заказа лекарств в аптеках города',
          description: ['Текст для фастера я напишу сегодня позже.'],
          links: [
            {
              icontype: 'globe',
              description: 'beta:',
              href: 'https://faster.ru',
              text: 'faster.ru'
            }
          ],
          image: {
            src: '/static/img/faster/desktop/phone_map_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-phone_map_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        duration: 9000,
        data: {
          src: '/static/img/faster/desktop/browser_scroll_desktop.mp4',
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/browser_catalog_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-browser_catalog_desktop.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/faster/desktop/phone_catalog_desktop.jpg',
              preloader:
                '/static/img/faster/desktop/preloader-phone_catalog_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/faster/desktop/phone_map_desktop.jpg',
              preloader:
                '/static/img/faster/desktop/preloader-phone_map_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/faster/desktop/phone_product_desktop.jpg',
              preloader:
                '/static/img/faster/desktop/preloader-phone_product_desktop.jpg',
              type: 'img'
            }
          ],
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/full_product_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-full_product_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/browser_bag_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-browser_bag_desktop.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/full_elements_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-full_elements_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/browser_status_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-browser_status_desktop.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/full_notfound_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-full_notfound_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/browser_search_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-browser_search_desktop.jpg'
          },
          backgroundColor: '#EDEEF0'
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/faster/desktop/full_details_desktop.jpg',
            preloader:
              '/static/img/faster/desktop/preloader-full_details_desktop.jpg'
          }
        }
      }
    ]
  },

  /* YANGO DESKTOP CASE */
  {
    description: {
      type: 'сайт + приложение',
      name: 'Yango',
      links: [
        {
          icontype: 'globe',
          href: 'https://yango.pro'
        },
        {
          icontype: 'article',
          href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442'
        }
      ]
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/cover_desktop_fullslide.jpg',
            preloader:
              '/static/img/yango/desktop/preloader-cover_desktop_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleWithPhoneDesktop,
        duration: 12000,
        data: {
          title: 'Инвестиции через мобильное приложение',
          description: [
            'Yango — сервис для инвестирования в надежные компании. С помощью приложения можно купить облигации Сбербанка, МТС или РЖД и получить доход выше, чем у обычных вкладов. Мы сделали редизайн приложения и запустили первую версию промо-сайта.'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://yango.pro',
              text: 'yango.pro'
            }
          ],
          image: {
            src: '/static/img/yango/desktop/0_desktop.jpg',
            preloader: '/static/img/yango/desktop/preloader-0_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        duration: 12000,
        data: {
          screens: [
            {
              src: '/static/img/yango/desktop/1.1_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-1.1_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/1.2_desktop.mp4',
              type: 'video'
            },
            {
              src: '/static/img/yango/desktop/1.3_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-1.3_desktop.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        duration: 9000,
        data: {
          screens: [
            {
              src: '/static/img/yango/desktop/2.2_desktop.mp4',
              type: 'video'
            },
            {
              src: '/static/img/yango/desktop/2.1_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-2.1_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/2.3_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-2.3_desktop.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/yango/desktop/3.1_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-3.1_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/3.2_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-3.2_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/3.3_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-3.3_desktop.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.VideoDesktop,
        duration: 11000,
        data: {
          src: '/static/img/yango/desktop/4_desktop_fullslide.mp4'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/5_desktop.jpg',
            preloader: '/static/img/yango/desktop/preloader-5_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/6_desktop.jpg',
            preloader: '/static/img/yango/desktop/preloader-6_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        duration: 17000,
        data: {
          src: '/static/img/yango/desktop/7_desktop.mp4'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/yango/desktop/8.1_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-8.1_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/8.2_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-8.2_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/8.3_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-8.3_desktop.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/9_desktop_fullslide.jpg',
            preloader:
              '/static/img/yango/desktop/preloader-9_desktop_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/10_desktop_fullslide.jpg',
            preloader:
              '/static/img/yango/desktop/preloader-10_desktop_fullslide.jpg'
          }
        }
      }
    ]
  },

  /* ENCORE FITNESS DESKTOP CASE */
  {
    description: {
      type: 'сайт',
      name: 'Encore Fitness',
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
          image: {
            src:
              '/static/img/encore_fitness/desktop/cover_encore_desktop_fullslide.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-cover_encore_desktop_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleDesktop,
        duration: 12000,
        data: {
          title: 'Новое представление об идеальном фитнесе',
          description: [
            'Мы сделали сайт, который стал продолжением уникального клиентского опыта в клубах Encore Fitness. Cочетанием технологичности и функциональности с историей бренда и вниманием к деталям.'
          ],
          links: [
            {
              icontype: 'globe',
              href: 'https://encorefitness.ru',
              text: 'encorefitness.ru'
            },
            {
              icontype: 'article',
              href: 'https://encorefitness.ru',
              text: 'читать кейс'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/encore_fitness/desktop/1-main_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-1-main_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        duration: 10000,
        data: {
          src:
            '/static/img/encore_fitness/desktop/2-club_encore_desktop_opt.mp4'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/desktop/3-trainers_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-3-trainers_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/desktop/4-cards_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-4-cards_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src:
                '/static/img/encore_fitness/desktop/9.1-main_encore_mobile-screen_desktop.jpg',
              preloader:
                '/static/img/encore_fitness/desktop/preloader-9.1-main_encore_mobile-screen_desktop.jpg',
              type: 'img'
            },
            {
              src:
                '/static/img/encore_fitness/desktop/9.2-trainers_encore_mobile-screen_desktop.jpg',
              preloader:
                '/static/img/encore_fitness/desktop/preloader-9.2-trainers_encore_mobile-screen_desktop.jpg',
              type: 'img'
            },
            {
              src:
                '/static/img/encore_fitness/desktop/9.3-schedule_encore_mobile-screen_desktop.jpg',
              preloader:
                '/static/img/encore_fitness/desktop/preloader-9.3-schedule_encore_mobile-screen_desktop.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        duration: 8000,
        data: {
          src:
            '/static/img/encore_fitness/desktop/5-grouptraining_desktop_opt.mp4'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/desktop/6-schedule_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-6-schedule_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/desktop/7-workout_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-7-workout_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/encore_fitness/desktop/8-spa_encore_desktop.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-8-spa_encore_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src:
              '/static/img/encore_fitness/desktop/10_grid-desktop_encore_desktop_full-slide.jpg',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-10_grid-desktop_encore_desktop_full-slide.jpg'
          }
        }
      }
    ]
  },

  /* OBED BUFET DESKTOP CASE */
  {
    description: {
      type: 'приложение',
      name: 'ОбедБуфет'
    },
    slides: [
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src: '/static/img/obed_bufet/cover_obedbufet_desktop_fullslide.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-cover_obedbufet_desktop_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleDesktop,
        duration: 12000,
        data: {
          title: 'Дружелюбная доставка домашней еды',
          description: [
            'Заказ еды — простое и понятное действие. Таким мы сделали интерфейс этого приложения. Mинимум рекламы, позитивные цвета и формы, забавные персонажи, легкий тон коммуникации и простота в использовании.'
          ]
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/obed_bufet/0-location_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-0-location_obedbufet_mobile.jpg',
              type: 'img'
            },
            {
              src: '',
              type: 'img'
            },
            {
              src: '',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/obed_bufet/1-main_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-1-main_obedbufet_mobile.jpg',
              type: 'img'
            },
            {
              src: '/static/img/obed_bufet/2-catalog_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-2-catalog_obedbufet_mobile.jpg',
              type: 'img'
            },
            {
              src: '/static/img/obed_bufet/3-product_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-3-product_obedbufet_mobile.jpg',
              type: 'img'
            }
          ]
        }
      },
      {
        type: TemplatesNames.PictureDesktop,
        data: {
          image: {
            src:
              '/static/img/obed_bufet/7-rest_obedbufet_desktop-fullscreen.jpg',
            preloader:
              '/static/img/obed_bufet/preloader-7-rest_obedbufet_desktop-fullscreen.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        data: {
          screens: [
            {
              src: '/static/img/obed_bufet/4-profile_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-4-profile_obedbufet_mobile.jpg',
              type: 'img'
            },
            {
              src: '/static/img/obed_bufet/5-address_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-5-address_obedbufet_mobile.jpg',
              type: 'img'
            },
            {
              src: '/static/img/obed_bufet/6-history_obedbufet_mobile.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-6-history_obedbufet_mobile.jpg',
              type: 'img'
            }
          ]
        }
      }
    ]
  }
]

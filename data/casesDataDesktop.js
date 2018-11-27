import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const casesDataDesktop = [
  /* FASTER DESKTOP CASE */
  {
    description: {
      type: 'веб-сервис',
      name: 'Faster'
    },
    slides: [
      {
        type: TemplatesNames.VideoDesktop,
        duration: 10000,
        data: {
          image: {
            src: '/static/img/faster/desktop/full_order_desktop.mp4',
            preloader:
              '/static/img/faster/desktop/preloader-full_order_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.ArticleWithPhoneDesktop,
        duration: 12000,
        data: {
          title: 'Новый опыт покупки лекарств',
          description: [
            `Faster — это сервис, который объединяет все аптеки города, находит и${NON_BREAKING_SPACE}бронирует лекарства по${NON_BREAKING_SPACE}лучшим ценам. Мы отвечали за${NON_BREAKING_SPACE}все стороны продукта: от${NON_BREAKING_SPACE}логотипа и${NON_BREAKING_SPACE}цвета кнопок до${NON_BREAKING_SPACE}архитектуры проекта, интеграций с${NON_BREAKING_SPACE}базами данных и${NON_BREAKING_SPACE}разработки приложения для аптек.`,
            'Запуск скоро.'
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
        duration: 90000,
        data: {
          image: {
            src: '/static/img/faster/desktop/browser_scroll_desktop.mp4',
            preloader:
              '/static/img/faster/desktop/preloader-browser_scroll_desktop.jpg'
          },
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
        duration: 7000,
        data: {
          screens: [
            {
              src: '/static/img/faster/desktop/phone_product_desktop.jpg',
              preloader:
                '/static/img/faster/desktop/preloader-phone_product_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/faster/mobile/filter_mobile.mp4',
              preloader:
                '/static/img/faster/mobile/preloader-filter_mobile.jpg',
              type: 'video'
            },
            {
              src: '/static/img/faster/mobile/phone_order_mobile.jpg',
              preloader:
                '/static/img/faster/mobile/preloader-phone_order_mobile.jpg',
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
            `Yango — сервис для инвестирования в${NON_BREAKING_SPACE}надежные компании. С${NON_BREAKING_SPACE}помощью приложения можно купить облигации Сбербанка, МТС или РЖД и${NON_BREAKING_SPACE}получить доход выше, чем у${NON_BREAKING_SPACE}обычных вкладов. Мы сделали редизайн приложения и${NON_BREAKING_SPACE}запустили первую версию промо-сайта.`
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
              src: '/static/img/yango/desktop/1.2_desktop.mp4',
              preloader: '/static/img/yango/desktop/preloader-1.2_desktop.jpg',
              type: 'video'
            },
            {
              src: '/static/img/yango/desktop/1.1_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-1.1_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/yango/desktop/1.3_desktop.jpg',
              preloader: '/static/img/yango/desktop/preloader-1.3_desktop.jpg',
              type: 'img'
            }
          ],
          backgroundColor: '#AAACB5'
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        duration: 9000,
        data: {
          screens: [
            {
              src: '/static/img/yango/desktop/2.2_desktop.mp4',
              preloader: '/static/img/yango/desktop/preloader-2.2_desktop.jpg',
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
          ],
          backgroundColor: '#AAACB5'
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
          ],
          backgroundColor: '#AAACB5'
        }
      },
      {
        type: TemplatesNames.VideoDesktop,
        duration: 11000,
        data: {
          image: {
            src: '/static/img/yango/desktop/4_desktop_fullslide.mp4',
            preloader:
              '/static/img/yango/desktop/preloader-4_desktop_fullslide.jpg'
          }
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/5_desktop.jpg',
            preloader: '/static/img/yango/desktop/preloader-5_desktop.jpg'
          },
          backgroundColor: '#AAACB5'
        }
      },
      {
        type: TemplatesNames.FramePictDesktop,
        data: {
          image: {
            src: '/static/img/yango/desktop/6_desktop.jpg',
            preloader: '/static/img/yango/desktop/preloader-6_desktop.jpg'
          },
          backgroundColor: '#AAACB5'
        }
      },
      {
        type: TemplatesNames.FrameVideoDesktop,
        duration: 17000,
        data: {
          image: {
            src: '/static/img/yango/desktop/7_desktop.mp4',
            preloader: '/static/img/yango/desktop/preloader-7_desktop.jpg'
          },
          backgroundColor: '#AAACB5'
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
          ],
          backgroundColor: '#AAACB5'
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
        },
        {
          icontype: 'article',
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
          title: `Меняем представление о${NON_BREAKING_SPACE}фитнес-клубах`,
          description: [
            `Мы консультировали разработку концепции бренда (совместно с${NON_BREAKING_SPACE}<a target="_blank" rel = "noopener noreferrer" href="http://fullfort.agency/">Fullfort</a>) и${NON_BREAKING_SPACE}сделали сайт, который стал продолжением уникального клиентского опыта в${NON_BREAKING_SPACE}клубах Encore Fitness —${NON_BREAKING_SPACE}сочетанием технологичности и${NON_BREAKING_SPACE}функциональности с${NON_BREAKING_SPACE}историей бренда и${NON_BREAKING_SPACE}вниманием к${NON_BREAKING_SPACE}деталям.`,
            'Фото: Арсений Джабиев.'
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
          image: {
            src:
              '/static/img/encore_fitness/desktop/2-club_encore_desktop_opt.mp4',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-2-club_encore_desktop_opt.jpg'
          }
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
          image: {
            src:
              '/static/img/encore_fitness/desktop/5-grouptraining_desktop_opt.mp4',
            preloader:
              '/static/img/encore_fitness/desktop/preloader-5-grouptraining_desktop_opt.jpg'
          }
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
      type: 'ios + android',
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
        type: TemplatesNames.ArticleWithPhoneDesktop,
        duration: 12000,
        data: {
          title: 'Дружелюбная доставка домашней еды',
          description: [
            `Заказ еды — простое и${NON_BREAKING_SPACE}понятное действие. Таким мы${NON_BREAKING_SPACE}сделали интерфейс этого приложения. Mинимум рекламы, позитивные цвета и${NON_BREAKING_SPACE}формы, забавные персонажи, легкий тон коммуникации и${NON_BREAKING_SPACE}простота в${NON_BREAKING_SPACE}использовании.`
          ],
          image: {
            src: '/static/img/obed_bufet/0-location_obedbufet-app_desktop.jpg',
            preloader:
              '/static/img/yango/desktop/preloader-1.1-video1_obedbufet-app_desktop.jpg'
          }
        }
      },
      {
        type: TemplatesNames.PhonesDesktop,
        duration: 13000,
        data: {
          screens: [
            {
              src:
                '/static/img/obed_bufet/1.1-video1_obedbufet-app_desktop.mp4',
              preloader:
                '/static/img/obed_bufet/preloader-1.1-video1_obedbufet-app_desktop.jpg',
              type: 'video'
            },
            {
              src: '/static/img/obed_bufet/1.2-main_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-1.2-main_obedbufet-app_desktop.jpg',
              type: 'img'
            },
            {
              src:
                '/static/img/obed_bufet/1.3-catalog_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-1.3-catalog_obedbufet-app_desktop.jpg',
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
        duration: 13000,
        data: {
          screens: [
            {
              src:
                '/static/img/obed_bufet/2.1-video2_obedbufet-app_desktop.mp4',
              preloader:
                '/static/img/obed_bufet/preloader-2.1-video2_obedbufet-app_desktop.jpg',
              type: 'video'
            },
            {
              src:
                '/static/img/obed_bufet/2.2-product_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-2.2-product_obedbufet-app_desktop.jpg',
              type: 'img'
            },
            {
              src: '/static/img/obed_bufet/2.3-order_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-2.3-order_obedbufet-app_desktop.jpg',
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
              src:
                '/static/img/obed_bufet/3.1-profile_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-3.1-profile_obedbufet-app_desktop.jpg',
              type: 'img'
            },
            {
              src:
                '/static/img/obed_bufet/3.2-address_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-3.2-address_obedbufet-app_desktop.jpg',
              type: 'img'
            },
            {
              src:
                '/static/img/obed_bufet/3.3-history_obedbufet-app_desktop.jpg',
              preloader:
                '/static/img/obed_bufet/preloader-3.3-history_obedbufet-app_desktop.jpg',
              type: 'img'
            }
          ]
        }
      }
    ]
  }
]

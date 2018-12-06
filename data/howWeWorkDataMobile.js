import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const howWeWorkDataMobile = {
  description: {
    type: {
      ru: 'вики',
      en: 'wiki'
    },
    name: {
      ru: 'Как мы работаем',
      en: 'How we work'
    }
  },
  slides: [
    {
      type: TemplatesNames.NavMobile,
      duration: 7000,
      data: {
        title: {
          ru: `Принципы проектной работы и${NON_BREAKING_SPACE}коммуникации Breadhead`,
          en: 'Workflow and communication principles'
        },
        links: [
          {
            id: 'team_clients',
            text: {
              ru: 'Команда и клиент ›',
              en: 'Team and client ›'
            }
          },
          {
            id: 'processes_roles',
            text: { ru: 'Процесс и роли ›', en: 'Process and roles ›' }
          },
          {
            id: 'reports_money',
            text: { ru: 'Отчёты и деньги ›', en: 'Report and payment ›' }
          },
          {
            text: { ru: 'Проектирование ›', en: 'Design ›' },
            isDisabled: true
          },
          {
            text: { ru: 'Разработка ›', en: 'Development ›' },
            isDisabled: true
          },
          {
            text: { ru: 'Контроль качества ›', en: 'Quality assurance ›' },
            isDisabled: true
          },
          {
            text: { ru: 'Как начать ›', en: 'How to start ›' },
            isDisabled: true
          }
        ]
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      id: 'team_clients',
      data: {
        title: {
          ru: 'Команда и клиент\n→ Открытость',
          en: 'Team and client\n→ Accessability'
        },
        description: {
          ru: [
            `Клиент имеет доступ к${NON_BREAKING_SPACE}чату в${NON_BREAKING_SPACE}Slack, трекеру задач в${NON_BREAKING_SPACE}Jira, почасовым отчётам, промежуточным результатам и${NON_BREAKING_SPACE}материалам в${NON_BREAKING_SPACE}облаке. Всё это открыто в${NON_BREAKING_SPACE}любой момент проекта. Аккаунт-менеджер рядом. Он помогает клиенту с${NON_BREAKING_SPACE}общими вопросами о${NON_BREAKING_SPACE}прогрессе, документах, расходах, но${NON_BREAKING_SPACE}не${NON_BREAKING_SPACE}вмешивается в${NON_BREAKING_SPACE}работу команды.`
          ],
          en: [
            'The client has access to our Slack chat, Jira issue tracker, hourly reports, intermediate results and other data in the cloud. All this information is available at any stage of the project. Account manager is always there ready to advise the client on general matters—work progress, documents and expenses, while never interfering with team work.'
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Команда и клиент\n→ Ответственность',
          en: 'Team and client\n→ Responsibility'
        },
        description: {
          ru: [
            `Команда работает с${NON_BREAKING_SPACE}клиентом напрямую — для этого не${NON_BREAKING_SPACE}нужен менеджер. Когда появляются вопросы, которые нужно решить, главный дизайнер или техлид сами инициируют встречу или обсуждение в${NON_BREAKING_SPACE}чате. Они сами договариваются с${NON_BREAKING_SPACE}клиентом о${NON_BREAKING_SPACE}сроках, размере кнопок или покупке сервера.`
          ],
          en: [
            `The team works directly with the client. When issues arise which need to be resolved immediately, the chief designer or tech lead initiate a${NON_BREAKING_SPACE}meeting or a${NON_BREAKING_SPACE}chat discussion. They agree with the client on timing, button sizes or server purchases.`
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Команда и клиент\n→ Скорость решений',
          en: 'Team and client\n→ Quick decision making'
        },
        description: {
          ru: [
            `В крупных компаниях любят перекидывать задачи между менеджерами и${NON_BREAKING_SPACE}отделами. Мы ценим время, поэтому стараемся минимизировать цепочки согласований и${NON_BREAKING_SPACE}общаться с${NON_BREAKING_SPACE}принимающим решение.`
          ],
          en: [
            `In big companies it takes a${NON_BREAKING_SPACE}long time for a${NON_BREAKING_SPACE}draft project to be approved by all managers and departments. We appreciate time, so we try to minimize approval procedures and communicate directly with the decision maker.`
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      id: 'processes_roles',
      data: {
        title: {
          ru: 'Процесс и роли\n→ Подход',
          en: 'Process and roles\n→ Approach'
        },
        description: {
          ru: [
            `Мы сторонники гибких методов разработки. Наш процесс похож на${NON_BREAKING_SPACE}концепцию <a target="_blank" rel = "noopener noreferrer" href="https://ru.wikipedia.org/wiki/Rational_Unified_Process">Rational Unified Process</a>: допускаем, что требования к${NON_BREAKING_SPACE}продукту могут меняться в${NON_BREAKING_SPACE}процессе, обеспечиваем тесный контакт команды и${NON_BREAKING_SPACE}клиента, используем <a target="_blank" rel = "noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">компоненты</a> в${NON_BREAKING_SPACE}дизайне и${NON_BREAKING_SPACE}разработке, тестируем на${NON_BREAKING_SPACE}ранних стадиях.`
          ],
          en: [
            'We support flexible development methods. Our workflow is similar to that of the <a target="_blank" rel = "noopener noreferrer" href="https://en.wikipedia.org/wiki/Rational_Unified_Process">Rational Unified Process</a>: we assume that product requirements may change during the process of development. We provide close contact with the client, use <a target="_blank" rel = "noopener noreferrer" href="https://en.wikipedia.org/wiki/Component-based_software_engineering">components</a> in design and development, and test our product at the early stages.'
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Процесс и роли\n→ Спринты',
          en: 'Process and roles\n→ Sprints'
        },
        description: {
          ru: [
            `Работаем короткими двухнедельными итерациями. Спринты позволяют сделать процесс предсказуемым и${NON_BREAKING_SPACE}прозрачным. Команда и${NON_BREAKING_SPACE}клиент регулярно получают видимый результат и${NON_BREAKING_SPACE}обратную связь от${NON_BREAKING_SPACE}своей работы.`
          ],
          en: [
            'We work in short two-week iterations. Sprints make the process transparent and predictable. The team and the client can always see perceptible results and get feedback from their work.'
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Процесс и роли\n→ Специалисты',
          en: 'Process and roles\n→ Specialists'
        },
        description: {
          ru: [
            `Мы определяем участников команды перед каждым спринтом. Это специалисты с${NON_BREAKING_SPACE}нужным опытом и инициативой. В${NON_BREAKING_SPACE}спринте обычно участвуют 2–4 человека. Например, на${NON_BREAKING_SPACE}этапе проектирования —${NON_BREAKING_SPACE}это два дизайнера и${NON_BREAKING_SPACE}техлид, в${NON_BREAKING_SPACE}разгар разработки —${NON_BREAKING_SPACE}несколько программистов.`
          ],
          en: [
            `For each sprint, we assign a${NON_BREAKING_SPACE}team of 2–4 specialists with the necessary experience and initiatives. For example, these are two designers and a${NON_BREAKING_SPACE}tech lead at the design stage and a${NON_BREAKING_SPACE}number of programmers at the stage of development.`
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      id: 'reports_money',
      data: {
        title: {
          ru: 'Отчёты и деньги\n→ Оплата за время',
          en: 'Report and payment\n→ Time payment'
        },
        description: {
          ru: [
            `Точно оценить разработку сложного цифрового продукта невозможно. Мы либо обманем себя, недооценив проект, либо заложим большой запас на риски. Поэтому мы${NON_BREAKING_SPACE}берём деньги за${NON_BREAKING_SPACE}фактически затраченное время. Конечно, встаёт вопрос доверия. Но без доверия, в${NON_BREAKING_SPACE}любом случае, хороших проектов не${NON_BREAKING_SPACE}бывает.`
          ],
          en: [
            `It is impossible to accurately estimate the development of a${NON_BREAKING_SPACE}complex digital product. We would either fool ourselves by underestimating the project, or charge the client with additional payment to cover possible risks. That’s why we price only the actual time spent on work. Naturally, the question of trust may arise, but we believe no good project is possible without trust.`
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Отчёты и деньги\n→ Учёт часов',
          en: 'Report and payment\n→ Hours accounting'
        },
        description: {
          ru: [
            `Час наших специалистов стоит 2–3 тысячи рублей, в${NON_BREAKING_SPACE}зависимости от${NON_BREAKING_SPACE}их${NON_BREAKING_SPACE}уровня. В${NON_BREAKING_SPACE}отчёт попадает только чистое время на работу — в${NON_BREAKING_SPACE}среднем 6${NON_BREAKING_SPACE}часов в${NON_BREAKING_SPACE}день. Всё остальное: внутренние собрания, перерывы на обед или кофе — не фиксируем. Работа менеджера и${NON_BREAKING_SPACE}арт-директора включена в${NON_BREAKING_SPACE}ставку специалистов и${NON_BREAKING_SPACE}отдельно не${NON_BREAKING_SPACE}тарифицируется.`
          ],
          en: [
            `An hour of our work costs 2–3 thousand rubles depending on the level of a${NON_BREAKING_SPACE}specialist. The report only contains the actual working time—an average of 6 hours per day. Internal meetings, lunch or coffee breaks are not priced. The work of the manager and art director is included in the rate of specialists and is not charged additionally.`
          ]
        }
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      duration: 12000,
      data: {
        title: {
          ru: 'Отчёты и деньги\n→ Оценка',
          en: 'Report and payment\n→ Evaluation'
        },
        description: {
          ru: [
            `Перед началом проекта мы${NON_BREAKING_SPACE}готовим ориентировочную оценку, согласовываем с${NON_BREAKING_SPACE}клиентом границы бюджета и${NON_BREAKING_SPACE}сроков. После каждого спринта клиент получает отчёт с${NON_BREAKING_SPACE}затратами специалистов и${NON_BREAKING_SPACE}обсуждает с${NON_BREAKING_SPACE}командой прогресс проекта.`
          ],
          en: [
            'Before taking up the project, we prepare an approximate assessment and discuss budget limits and deadlines with the client. After each sprint, we send the client an expense report and discuss the project progress.'
          ]
        }
      }
    }
  ]
}

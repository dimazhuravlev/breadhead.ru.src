import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const howWeWorkDataMobile = {
  description: {
    type: 'вики',
    name: 'Как мы работаем'
  },
  slides: [
    {
      type: TemplatesNames.NavMobile,
      data: {
        title: `Принципы проектной работы и${NON_BREAKING_SPACE}коммуникации Breadhead`,
        links: [
          {
            id: 'team_clients',
            text: 'Команда и клиент ›'
          },
          {
            id: 'processes_roles',
            text: 'Процесс и роли ›'
          },
          {
            id: 'reports_money',
            text: 'Отчёты и деньги ›'
          },
          {
            id: 'start',
            text: 'Как начать ›'
          },
          {
            id: 'design',
            text: 'Проектирование ›'
          },
          {
            id: 'development',
            text: 'Разработка ›'
          },
          {
            id: 'control',
            text: 'Контроль качества ›'
          }
        ]
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'team_clients',
      data: {
        title: 'Команда и клиент /\nОткрытость',
        description: [
          `Клиент имеет доступ к${NON_BREAKING_SPACE}чату в${NON_BREAKING_SPACE}Slack, трекеру задач в${NON_BREAKING_SPACE}Jira, почасовым отчётам, промежуточным результатам и${NON_BREAKING_SPACE}материалам в${NON_BREAKING_SPACE}облаке. Всё это открыто в${NON_BREAKING_SPACE}любой момент проекта. Аккаунт-менеджер рядом. Он помогает клиенту с${NON_BREAKING_SPACE}общими вопросами о${NON_BREAKING_SPACE}прогрессе, документах, расходах. Но${NON_BREAKING_SPACE}не${NON_BREAKING_SPACE}мешает работать команде.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Команда и клиент /\nОтветственность',
        description: [
          `Команда работает с${NON_BREAKING_SPACE}клиентом напрямую — для этого не${NON_BREAKING_SPACE}нужен менеджер. Когда появляются вопросы, которые нужно решить, главный дизайнер или техлид сами инициируют встречу или обсуждение в${NON_BREAKING_SPACE}чате. Они договариваются с${NON_BREAKING_SPACE}клиентом о${NON_BREAKING_SPACE}сроках, размере кнопок или покупке сервера. И${NON_BREAKING_SPACE}отвечают за${NON_BREAKING_SPACE}свои действия.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Команда и клиент /\nСкорость решений',
        description: [
          `В крупных компаниях порой любят перекидывать задачи между менеджерами и${NON_BREAKING_SPACE}отделами. Мы ценим время, поэтому стараемся минимизировать цепочки согласований и${NON_BREAKING_SPACE}общаться с${NON_BREAKING_SPACE}принимающим решение.`
        ]
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'processes_roles',
      data: {
        title: 'Процесс и роли /\nПодход',
        description: [
          `Мы сторонники гибких методов разработки. Наш процесс похож на${NON_BREAKING_SPACE}концепцию <a target="_blank" rel = "noopener noreferrer" href="https://ru.wikipedia.org/wiki/Rational_Unified_Process">Rational Unified Process</a>: допускаем, что требования к${NON_BREAKING_SPACE}продукту могут меняться в${NON_BREAKING_SPACE}процессе; обеспечиваем тесный контакт команды и${NON_BREAKING_SPACE}клиента; проектируем и${NON_BREAKING_SPACE}тестируем архитектуру на${NON_BREAKING_SPACE}ранних стадиях; используем <a target="_blank" rel = "noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">компоненты</a> в${NON_BREAKING_SPACE}дизайне и${NON_BREAKING_SPACE}разработке.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Процесс и роли /\nСпринты',
        description: [
          `Работаем короткими двухнедельными итерациями. Спринты позволяют сделать процесс предсказуемым и${NON_BREAKING_SPACE}прозрачным. Команда и${NON_BREAKING_SPACE}клиент регулярно получают видимый результат и${NON_BREAKING_SPACE}обратную связь от${NON_BREAKING_SPACE}своей работы.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Процесс и роли /\nСпециалисты',
        description: [
          `Мы определяем участников команды перед каждым спринтом. Это специалисты с${NON_BREAKING_SPACE}нужным опытом и инициативой. В${NON_BREAKING_SPACE}спринте обычно участвуют 2—4 человека. Например, на${NON_BREAKING_SPACE}этапе проектирования —${NON_BREAKING_SPACE}это два дизайнера и${NON_BREAKING_SPACE}техлид, в${NON_BREAKING_SPACE}разгар разработки —${NON_BREAKING_SPACE}несколько программистов.`
        ]
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'reports_money',
      data: {
        title: 'Отчёты и деньги /\nОплата за время',
        description: [
          `Точно оценить разработку сложного цифрового продукта невозможно. Мы либо обманем себя, недооценив проект, либо заложим большой запас на риски. Поэтому мы${NON_BREAKING_SPACE}берем деньги за${NON_BREAKING_SPACE}фактически затраченное время. Конечно, встаёт вопрос доверия. Но без доверия, в${NON_BREAKING_SPACE}любом случае, хороших проектов не${NON_BREAKING_SPACE}бывает.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Отчёты и деньги /\nУчёт часов',
        description: [
          `Час наших специалистов стоит 2—3 тысячи рублей, в${NON_BREAKING_SPACE}зависимости от${NON_BREAKING_SPACE}их${NON_BREAKING_SPACE}уровня. В${NON_BREAKING_SPACE}отчёт попадает только чистое время на работу — в${NON_BREAKING_SPACE}среднем 6${NON_BREAKING_SPACE}часов в${NON_BREAKING_SPACE}день. Всё остальное — внутренние собрания, перерывы на обед или кофе — не фиксируем. Работа менеджера и${NON_BREAKING_SPACE}арт-директора включена в${NON_BREAKING_SPACE}ставку специалистов и${NON_BREAKING_SPACE}отдельно не${NON_BREAKING_SPACE}тарифицируется.`
        ]
      }
    },
    {
      type: TemplatesNames.ArticleMobile,
      data: {
        title: 'Отчёты и деньги /\nОценка',
        description: [
          `Перед началом проекта мы${NON_BREAKING_SPACE}готовим ориентировочную оценку, согласовываем с${NON_BREAKING_SPACE}клиентом границы бюджета и${NON_BREAKING_SPACE}сроков. После каждого спринта клиент получает отчёт с${NON_BREAKING_SPACE}затратами специалистов и${NON_BREAKING_SPACE}обсуждает с${NON_BREAKING_SPACE}командой прогресс проекта.`
        ]
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'start',
      data: {
        title: 'Как начать',
        description: ['Текст про то, как начать с нами работать.']
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'design',
      data: {
        title: 'Проектирование /\nСкоро'
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'development',
      data: {
        title: 'Разработка /\nСкоро'
      }
    },

    {
      type: TemplatesNames.ArticleMobile,
      id: 'control',
      data: {
        title: 'Контроль качества /\nСкоро'
      }
    }
  ]
}

import { TemplatesNames } from '@site/features/slider/molecules/Templates'
import { NON_BREAKING_SPACE } from '@site/constants.js'

export const howWeWorkDataMobile = {
  description: {
    type: 'вики',
    name: 'Как мы работаем'
  },
  slides: [
    {
      type: TemplatesNames.NavDesktop,
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
      type: TemplatesNames.ArticleDesktop,
      id: 'team_clients',
      data: {
        title: 'Команда и клиент /\nОткрытость',
        description: [
          'Клиент имеет доступ к чату в Slack, трекеру задач в Jira, почасовым отчётам, промежуточным результатам и материалам в облаке. Всё это открыто в любой момент проекта. Аккаунт-менеджер рядом. Он помогает клиенту с общими вопросами о прогрессе, документах, расходах. Но не мешает работать команде.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Команда и клиент /\nОтветственность',
        description: [
          'Команда работает с клиентом напрямую — для этого не нужен менеджер. Когда появляются вопросы, которые нужно решить, главный дизайнер или техлид сами инициируют встречу или обсуждение в чате. Они договариваются с клиентом о сроках, размере кнопок или покупке сервера. И отвечают за свои действия.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Команда и клиент /\nСкорость решений',
        description: [
          'В крупных компаниях порой любят перекидывать задачи между менеджерами и отделами. Мы ценим время, поэтому стараемся минимизировать цепочки согласований и общаться с принимающим решение.'
        ]
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'processes_roles',
      data: {
        title: 'Процесс и роли /\nПодход',
        description: [
          'Мы сторонники гибких методов разработки. Наш процесс похож на концепцию <a href="https://ru.wikipedia.org/wiki/Rational_Unified_Process">Rational Unified Process</a>: допускаем, что требования к продукту могут меняться в процессе; обеспечиваем тесный контакт команды и клиента; проектируем и тестируем архитектуру на ранних стадиях; используем <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">компоненты</a> в дизайне и разработке.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Процесс и роли /\nСпринты',
        description: [
          'Работаем короткими двухнедельными итерациями. Спринты позволяют сделать процесс предсказуемым и прозрачным. Команда и клиент регулярно получают видимый результат и обратную связь от своей работы.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Процесс и роли /\nСпециалисты',
        description: [
          'Мы определяем участников команды перед каждым спринтом. Это специалисты с нужным опытом и инициативой. В спринте обычно участвуют 2—4 человека. Например, на этапе проектирования — это два дизайнера и техлид, в разгар разработки — несколько программистов.'
        ]
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'reports_money',
      data: {
        title: 'Отчёты и деньги /\nОплата за время',
        description: [
          'Точно оценить разработку сложного цифрового продукта невозможно. Мы либо обманем себя, недооценив проект, либо заложим большой запас на риски. Поэтому мы берем деньги за фактически затраченное время. Конечно, встаёт вопрос доверия. Но без доверия, в любом случае, хороших проектов не бывает.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Отчёты и деньги /\nУчёт часов',
        description: [
          'Час наших специалистов стоит 2—3 тысячи рублей, в зависимости от их уровня. В отчёт попадает только чистое время на работу — в среднем 6 часов в день. Всё остальное — внутренние собрания, перерывы на обед или кофе — не фиксируем. Работа менеджера и арт-директора включена в ставку специалистов и отдельно не тарифицируется.'
        ]
      }
    },
    {
      type: TemplatesNames.ArticleDesktop,
      data: {
        title: 'Отчёты и деньги /\nОценка',
        description: [
          'Перед началом проекта мы готовим ориентировочную оценку, согласовываем с клиентом границы бюджета и сроков. После каждого спринта клиент получает отчёт с затратами специалистов и обсуждает с командой прогресс проекта.'
        ]
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'start',
      data: {
        title: 'Как начать',
        description: ['Текст про то, как начать с нами работать.']
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'design',
      data: {
        title: 'Проектирование /\nСкоро'
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'development',
      data: {
        title: 'Разработка /\nСкоро'
      }
    },

    {
      type: TemplatesNames.ArticleDesktop,
      id: 'control',
      data: {
        title: 'Контроль качества /\nСкоро'
      }
    }
  ]
}

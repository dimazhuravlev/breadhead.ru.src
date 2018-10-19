import { TemplatesNames } from '@site/features/slider/molecules/Templates'

export const howWeWorkData = {
  description: {
    type: 'вики',
    name: 'Как мы работаем',
    links: [
      {
        icontype: 'globe',
        href: 'https://medium.com/'
      }
    ]
  },
  slides: [
    {
      type: TemplatesNames.Title,
      data: {
        title: 'Принципы проектной работы и коммуникации Breadhead',
        links: [
          {
            href: 'https://yamiyami.ru',
            text: 'Команда и клиент ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'Проектирование ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'Гибкий процесс ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'Разработка ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'Отчеты и деньги ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'Контроль качества ›'
          },
          {
            href: 'https://medium.com/breadhead-stories/yami-yami-c7f2b5916442',
            text: 'С чего начать ›'
          }
        ]
      }
    },
    {
      type: TemplatesNames.Article,
      data: {
        title: 'Мы работаем хорошо. Но иногда мы работаем ещё чуть более лучше',
        description: [
          'Инкапсуляция значит, что можно провести линию вокруг функции или набора данных так, что снаружи не будет видно данных, находящихся внутри. Инкапсуляция есть не только в объекто-ориентированных языках. Наследование по сути просто переобъявление каких‑то полей или методов. Есть не только в объекто-ориентированных языках, хотя в них наследование работает удобнее.'
        ]
      }
    },
    {
      type: TemplatesNames.Article,
      data: {
        title:
          'У нас очень гибкие процессы. Возможно, они даже самые гибкие в мире',
        description: [
          'Плагинная архитектура значит, что интерфейс и база данных должны зависеть от бизнес‑правил, а не наоборот. Интерфейс и БД — это плагины.',
          'Функция должна решать только одну задачу, а модуль должен иметь только одну причину, чтобы его менять.'
        ]
      }
    }
  ]
}

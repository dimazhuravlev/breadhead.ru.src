import pickByLang from '../pickByLang'

describe('pickByLang', () => {
  test('pass data as is if lang not specified',  () => {
    const data = {
      name: 'Igor',
    }

    expect(pickByLang(data, 'en')).toEqual(data)
  })

  test('pick lang data in flat object with one key',  () => {
    const data = {
      name: {
        en: 'Igor',
        ru: 'Игорь'
      }
    }

    expect(pickByLang(data, 'ru')).toEqual({
      name: 'Игорь'
    })
  })

  test('pick lang data in flat object with many keys',  () => {
    const data = {
      name: {
        en: 'Igor',
        ru: 'Игорь'
      },
      surname: {
        en: 'Kamyshev',
        ru: 'Камышев',
      }
    }

    expect(pickByLang(data, 'ru')).toEqual({
      name: 'Игорь',
      surname: 'Камышев',
    })
  })

  test('pick lang data in deep object',  () => {
    const data = {
      name: {
        en: 'Igor',
        ru: 'Игорь'
      },
      data: {
        description: {
          en: 'Human',
          ru: 'Человек',
        },
      },
    }

    expect(pickByLang(data, 'ru')).toEqual({
      name: 'Игорь',
      data: {
        description: 'Человек',
      },
    })
  })

  test('pick lang data in object with normal keys',  () => {
    const data = {
      name: {
        en: 'Igor',
        ru: 'Игорь'
      },
      data: {
        description: 'Lang insensitive',
      },
    }

    expect(pickByLang(data, 'ru')).toEqual({
      name: 'Игорь',
      data: {
        description: 'Lang insensitive',
      },
    })
  })

  test('pick lang data in object with array',  () => {
    const data = {
      name: {
        en: 'Igor',
        ru: 'Игорь'
      },
      slides: [
        'Lang insensitive 1',
        'Lang insensitive 2',
      ],
    }

    expect(pickByLang(data, 'ru')).toEqual({
      name: 'Игорь',
      slides: [
        'Lang insensitive 1',
        'Lang insensitive 2',
      ],
    })
  })
})

import { isPlainObject } from 'lodash'

const pickByLang = (lang) => {
  const pick = (data) => {
    if (!isPlainObject(data)) {
      return data
    }

    const keys = Object.keys(data)
    if (!keys.includes(lang)) {
      let obj = {}
      for (let key of keys) {

        obj[key] = pick(data[key])
      }

      return obj
    }

    return data[lang]
  }

  return pick
}

export default pickByLang
import { isPlainObject } from 'lodash'

const pickByLang = (data, lang) => {
  if (!isPlainObject(data)) {
    return data
  }

  const keys = Object.keys(data)
  if (!keys.includes(lang)) {
    let obj = {}
    for (let key of keys) {

      obj[key] = pickByLang(data[key], lang)
    }

    return obj
  }

  return data[lang]
}

export default pickByLang
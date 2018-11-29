import { isPlainObject, isArray, isUndefined } from 'lodash'

const pickByLang = (lang) => {
  const pick = (data) => {

    if (isArray(data)) {
      return data
        .filter((element) => isUndefined(element.onlyFor) || element.onlyFor === lang)
        .map(pick)
    }

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
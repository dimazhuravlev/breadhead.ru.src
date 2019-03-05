import { isPlainObject, isNull, isArray, isString, isUndefined, mapValues } from 'lodash'

const pickByLang = (lang) => {
  const checkEmpty = (v) => isUndefined(v) || isNull(v)
  const checkString = (v) => isString(v) && v === lang
  const checkArray = (v) => isArray(v) && v.includes(lang)

  const transformArray = (arr) => arr
    .filter(({ onlyFor }) =>
      checkEmpty(onlyFor) ||
        checkString(onlyFor) ||
          checkArray(onlyFor)
    )
    .map(pick)

  const pick = (data) => {
    if (isArray(data)) {
      return transformArray(data)
    }

    if (!isPlainObject(data)) {
      return data
    }

    if (Object.keys(data).includes(lang)) {
      return data[lang]
    }

    return mapValues(data, (value) => pick(value))
  }

  return pick
}

export default pickByLang
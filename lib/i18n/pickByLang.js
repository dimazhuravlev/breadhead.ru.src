import { isPlainObject, isNull, isArray, isString, isUndefined, mapValues } from 'lodash'

const pickByLang = (lang) => {
  const transformArray = (arr) => arr
    .filter(({ onlyFor }) =>
      (isUndefined(onlyFor) || isNull(onlyFor)) ||
        (isString(onlyFor) && onlyFor === lang) ||
          (isArray(onlyFor) && onlyFor.includes(lang))
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
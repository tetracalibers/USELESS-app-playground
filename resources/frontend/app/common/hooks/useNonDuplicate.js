export const useNonDuplicated = () => {
  // TODO 仕様に難あり
  const getNonDuplicatedObj = ({ duplicateArray, key, value }) => {
    if (!duplicateArray) return
    const nonDuplicatedArray = duplicateArray.reduce((map, obj) => {
      let mapValue
      if (Array.isArray(value)) {
        mapValue =
          value.length > 0 ? { ...value.map((value) => obj[value]) } : value
      } else if (typeof value === 'function') {
        mapValue = value(obj[key])
      } else {
        mapValue = value
      }
      return map.set(obj[key], mapValue)
    }, new Map())
    return Object.fromEntries(nonDuplicatedArray)
  }

  // WARNING: バグ未修正なので非推奨
  const getNonDuplicatedArray = ({ duplicateArray, key, value }) => {
    const nonDuplicatedObj = getNonDuplicatedObj({
      duplicateArray,
      key,
      value,
    })
    return Object.keys(nonDuplicatedObj).map((mapKey) => {
      let innerObj = {}
      innerObj[key] = mapKey
      innerObj[value] = nonDuplicatedObj[mapKey]
      return innerObj
    })
  }

  return { getNonDuplicatedArray, getNonDuplicatedObj }
}

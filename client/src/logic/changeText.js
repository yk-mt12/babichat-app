/**
 * 任意の範囲の整数をランダムに返す
 * @param {最小値} min
 * @param {最大値} max
 * @returns ランダムの整数
 *
 */
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 配列の任意の要素を入れ替える
 * @param {配列} array
 * @param {入れ替え元のインデックス} targetId
 * @param {入れ替え先のインデックス} sourceId
 * @returns 入れ替え後の配列
 */
function replaceArrayElements(array, targetId, sourceId) {
  return array.reduce(
    (resultArray, element, id, originalArray) => [
      ...resultArray,
      id === targetId
        ? originalArray[sourceId]
        : id === sourceId
        ? originalArray[targetId]
        : element,
    ],
    [],
  )
}

function changeText(num, ary) {
  for (let i = 0; i <= num; i++) {
    let rand1 = getRandomArbitrary(1, ary.length - 1)
    let rand2
    if (rand1 + 1 == ary.length) {
      rand2 = rand1 - 1
    } else {
      rand2 = rand1 + 1
    }

    ary = replaceArrayElements(ary, rand1, rand2)
    // console.log(txtAry.join())
  }

  return ary
}

export const getText = (text) => {
  const changeNum = getRandomArbitrary(1, text.length - 1)
  let txtAry = text.split('')

  txtAry = changeText(changeNum, txtAry)
  return txtAry.join('')
}

const text = 'ありがとうこんにちはこんばんは'
// getText(text)

console.log('原文: ' + text)
console.log('変換後: ' + getText(text))

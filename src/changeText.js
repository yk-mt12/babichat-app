
/**
 * 任意の範囲の整数をランダムに返す
 * @param {最小値} min
 * @param {最大値} max
 * @returns ランダムの整数
 *
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 配列の任意の要素を入れ替える
 * @param {配列} array
 * @param {入れ替え元のインデックス} targetId
 * @param {入れ替え先のインデックス} sourceId
 * @returns 入れ替え後の配列
 */
function replaceArrayElements(array, targetId, sourceId) {
    return array.reduce((resultArray, element, id, originalArray) => [
        ...resultArray,
        id === targetId ? originalArray[sourceId] :
        id === sourceId ? originalArray[targetId] :
        element
    ], []);
}

const text = 'ありがとうこんにちはこんばんは'
const change_num = getRandomArbitrary(1, text.length-1)
let text_ary = text.split('')


// console.log(text.length)
// console.log(change_num)

for(let i=0; i<=change_num; i++) {
    rand1 = getRandomArbitrary(1, text_ary.length-1)
    if(rand1+1 == text_ary.length) {
        rand2 = rand1 -1
    } else {
        rand2 = rand1 +1
    }

    text_ary = replaceArrayElements(text_ary, rand1, rand2)
    // console.log(text_ary.join())
}

console.log('原文: ' + text)
console.log('変換後: ' + text_ary.join(''))



var regexp = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu;

// 文字列の定義
const rowA = 'あかさたなはまやらわがざだばぱ'.split('');
const rowI = 'いきしちにひみりぎじぢびぴ'.split('');
const rowU = 'うくすつぬふむゆるんぐずづぶぷ'.split('');
const rowE = 'えけせてねへめれげぜでべぺ'.split('');
const rowO = 'おこそとのほもよろをごぞどぼぽ'.split('');
const rowKya = 'きゃ,ぎゃ,しゃ,じゃ,ちゃ,ぢゃ,にゃ,ひゃ,びゃ,ぴゃ,みゃ,りゃ'.split(',');
const rowKyu = 'きゅ,ぎゅ,しゅ,じゅ,ちゅ,ぢゅ,にゅ,ひゅ,びゅ,ぴゅ,みゅ,りゅ'.split(',');
const rowKyo = 'きょ,ぎょ,しょ,じょ,ちょ,ぢょ,にょ,ひょ,びょ,ぴょ,みょ,りょ'.split(',');


// 辞書の定義
const dictA = createDict(rowA, 'ば')
const dictI = createDict(rowI, 'び')
const dictU = createDict(rowU, 'ぶ')
const dictE = createDict(rowE, 'べ')
const dictO = createDict(rowO, 'ぼ')
const dictKya = createDict(rowKya, 'ば')
const dictKyu = createDict(rowKyu, 'ぶ')
const dictKyo = createDict(rowKyo, 'ぼ')
const dictAll = Object.assign(dictA ,dictI ,dictU ,dictE ,dictO,dictKya ,dictKyu ,dictKyo);

// 辞書の生成
function createDict(array, str) {
    var dict = {}
    array.forEach(element => {
        dict[element] = element + str
        // console.log(element+str)
    });

    // console.log(dict)
    return dict
}

// /**
//  * 絵文字が含まれているかどうか
//  * @param {文章} str
//  * @returns ブール値
//  */
// function isEmoji(str) {
//     var ranges = [
//         '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
//         '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
//         '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
//     ];
//     if (str.match(ranges.join('|'))) {
//         return true;
//     } else {
//         return false;
//     }
// }

/**
 *
 * @param {原文} text
 * @returns バビ語変換後の文章
 */
export const changeBabi = (text) => {

    var babigo = '';
    var out = '';
    const babigoAll = rowA + rowI + rowU + rowE + rowO;
    // console.log(babigoAll)
    let ary = text.split('');
    ary.forEach(function(value, i) {
        // console.log(i, value)
        if(regexp.test(value)) {
            if(babigoAll.includes(value)) {
                // console.log('ok')
                if(out != '') {
                    babigo += dictAll[out]
                }
                if(i == text.length-1) {
                    babigo += dictAll[value]
                }
                out = value
            } else if(['っ'].includes(value)) {
                babigo += dictAll[out] + value
                out = ''
            } else if(['ゃ','ゅ','ょ'].includes(value)) {
                out += value;
                babigo += dictAll[out];
                out = '';
            } else if(value == 'ー') {
                var tmp = dictAll[out]
                babigo += tmp + value // + tmp[tmp.length-1]
                out = ''
            } else if(['、', '。'].includes(value)) {
                if (out != '') {
                    babigo += dictAll[out]
                    babigo += value
                }
                out = ''
            }
        }
        else {
            babigo += value
        }
    });
    return babigo
}

let text = 'さいとうきょうこ'
let babigo = changeBabi(text)
console.log(babigo)


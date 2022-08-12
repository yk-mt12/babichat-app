
// 文字列の定義
const row_a = 'あかさたなはまやらわがざだばぱ'.split('');
const row_i = 'いきしちにひみりぎじぢびぴ'.split('');
const row_u = 'うくすつぬふむゆるんぐずづぶぷ'.split('');
const row_e = 'えけせてねへめれげぜでべぺ'.split('');
const row_o = 'おこそとのほもよろをごぞどぼぽ'.split('');
const row_kya = 'きゃ,ぎゃ,しゃ,じゃ,ちゃ,ぢゃ,にゃ,ひゃ,びゃ,ぴゃ,みゃ,りゃ'.split(',');
const row_kyu = 'きゅ,ぎゅ,しゅ,じゅ,ちゅ,ぢゅ,にゅ,ひゅ,びゅ,ぴゅ,みゅ,りゅ'.split(',');
const row_kyo = 'きょ,ぎょ,しょ,じょ,ちょ,ぢょ,にょ,ひょ,びょ,ぴょ,みょ,りょ'.split(',');


// 辞書の定義
const a_dict = createDict(row_a, 'ば')
const i_dict = createDict(row_i, 'び')
const u_dict = createDict(row_u, 'ぶ')
const e_dict = createDict(row_e, 'べ')
const o_dict = createDict(row_o, 'ぼ')
const kya_dict = createDict(row_kya, 'ば')
const kyu_dict = createDict(row_kyu, 'ぶ')
const kyo_dict = createDict(row_kyo, 'ぼ')
const dict_all = Object.assign(a_dict ,i_dict ,u_dict ,e_dict ,o_dict,kya_dict ,kyu_dict ,kyo_dict);

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


function change_babi(text) {
    var babigo = '';
    var out = '';
    const row_all = row_a + row_i + row_u + row_e + row_o;
    // console.log(row_all)
    ary = text.split('');
    ary.forEach(function(value, i) {
        // console.log(i, value)
        if(row_all.includes(value)) {
            // console.log('ok')
            if(out != '') {
                babigo += dict_all[out]
            }
            if(i == text.length-1) {
                babigo += dict_all[value]
            }
            out = value
        } else if(['っ'].includes(value)) {
            babigo += dict_all[out] + value
            out = ''
        } else if(['ゃ','ゅ','ょ'].includes(value)) {
            out += value;
            babigo += dict_all[out];
            out = '';
        } else if(value == 'ー') {
            var tmp = dict_all[out]
            babigo += tmp + value //+ tmp[tmp.length-1]
            out = ''
        } else if(['、', '。'].includes(value)) {
            if (out != '') {
                babigo += dict_all[out]
                babigo += value
            }
            out = ''
        }
    });
    return babigo
}

text = 'さいとうきょうこ'
babigo = change_babi(text)
console.log(babigo)

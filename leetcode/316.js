/**
 * @param {string} s
 * @return {string}
 * @description 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 */
var removeDuplicateLetters = function (s) {
    let sArr = [...s];
    let result = [...sArr];

    for (let i = 0; i < sArr.length; i++) {
        let indexList = getCharactorIndex(s, sArr[i]);
        if (indexList.length == 1) {
            continue;
        } else {
            for (let j = 0; j < indexList.length - 1; j++) {
                result[indexList[j]] = 0
            }
        }
    }
    result = result.filter(item => item != 0);
    return result.join('');
};

/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
var getCharactorIndex = function (s, c) {
    let sArr = [...s];
    return sArr
        .map((item, index) => {
            return item == c ? index : undefined
        })
        .filter(item => item != undefined)
}

/**
 * @param {string} s
 * @return {string}
 * @description 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 */
var removeDuplicateLetters1 = function (s) {
    var arr = [];
    for (let i = 0, len = s.length; i < len; i++) {
        var str = s[i];
        if (arr.indexOf(str) !== -1) continue;
        while (arr[arr.length - 1] > str && s.indexOf(arr[arr.length - 1], i) > i) arr.pop();
        arr.push(str)
    }
    return arr.join("")
};

console.log(removeDuplicateLetters1("cbacdcbc"))
// "acdb"
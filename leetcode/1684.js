/**
 * @param {string} allowed
 * @param {string[]} words
 * @description words里包含allowed的其中一个词，且不包含其他词
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {

    // 然后把words里面跟allowed相同的字符去掉，如果是空字符串就是对的
    for(let i = 0; i < allowed.length; i++) {
        for(let j = 0; j < words.length; j++) {
            words[j] = words[j].replace(new RegExp(allowed[i],"gm"), '')
        }
    }
    return words.filter(item => item == '').length;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
// 2
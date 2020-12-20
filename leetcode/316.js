/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let sArr = [...s];
    let result = [...sArr];

    for(let i = 0; i < sArr.length; i++) {
        let indexList = getCharactorIndex(s, sArr[i]);
        if(indexList.length == 1) {
            continue;
        } else {
            for(let j = 0; j < indexList.length - 1; j++) {
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
var getCharactorIndex = function(s, c) {
    let sArr = [...s];
    return sArr
            .map((item, index) => {
                return item == c ? index : undefined
            })
            .filter(item => item != undefined)
}

console.log(removeDuplicateLetters("cbacdcbc"))

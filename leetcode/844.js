/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return stack(S) == stack(T);
};


/**
 * @description: 
 * @param {String} string 
 * @return {String} 
 */
var stack = function(string) {
    let result = [];

    let stringArr = string.split('');
    for(let i = 0; i < stringArr.length; i++) {
        stringArr[i] == '#' ? result.pop() : result.push(stringArr[i])
    }

    return result.join('');
}

console.log(backspaceCompare("a#c", "b"));
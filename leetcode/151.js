/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ')
};

console.log(reverseWords("the sky is blue")) // blue is sky the
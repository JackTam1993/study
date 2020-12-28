/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let first = 0;
    let second = 0;
    
    const length = s.length;
    for(let i = 0; i < s.length; i++) {
        if(VOWEL.includes(s[i]) && i <= length / 2 - 1) {
            first++
        }
        if(VOWEL.includes(s[i]) && i >= length / 2) {
            second++
        }
    }
    return first == second
};

const VOWEL = ['a','e','i','o','u','A','E','I','O','U'];

console.log(halvesAreAlike('textbook'));
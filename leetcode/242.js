// /**
//  * 暴力破解
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     return sortString(s) == sortString(t);
// };
// /**
//  * @param {string} string
//  * @return {string} 
//  */
// var sortString = function(string) {
//     return string.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join()
// }

/**
 * map
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let length = s.length;
    if(length != t.length) return false;

    let s_m = new Map();
    let s_t = new Map();

    for(let i = 0; i < length; i++) {
        let current_s = s[i];
        let current_t = t[i];

        if(s_m.has(current_s)) {
            s_m.set(current_s, s_m.get(current_s) + 1)
        } else {
            s_m.set(current_s, 1)
        }

        if(s_t.has(current_t)) {
            s_t.set(current_t, s_t.get(current_t) + 1)
        } else {
            s_t.set(current_t, 1)
        }
    }

    let s_keys = s_m.keys();
    for(let i of s_keys) {
        if(!s_t.has(i) || s_t.get(i) != s_m.get(i)) {
            return false
        }
    }
    return true
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));


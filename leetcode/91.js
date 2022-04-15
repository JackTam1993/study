/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // console.log(s)

    if(s == "0") return 0;

    let length = s.length;
    if(length <= 2 && s <= 26) {
        if(s[0] == '0') {
            return 0
        } else if(s[1] == '0') {
            return 1
        } else {
            return length;
        }
    }
    if(s > 26 && s < 100) {
        return numDecodings(s.substring(0, length - 1))
    } else {
        return numDecodings(s.substring(0, length-1)) + numDecodings(s.substring(0, length-2))
    }
};
// @lc code=end

// console.log(numDecodings('10')) // return 2 (它可以解码为 "AB"（1 2）或者 "L"（12）。)
console.log(numDecodings('27')) // return 2 (它可以解码为 "AB"（1 2）或者 "L"（12）。)
// console.log(numDecodings('06'))
// console.log(numDecodings('101'))
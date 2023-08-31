/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // 3的幂尾数是1、3、7、9，先过滤一下
    let rest = n % 10;
    if(rest != 1 && rest != 3 && rest != 7 && rest != 9 ) return false;

    if(n > 1) return isPowerOfThree(n / 3)
    return n == 1 ? true : false;
};

// isPowerOfThree = function(n) {
//     return n > 0 && 1162261467 % n == 0;
// }
// @lc code=end
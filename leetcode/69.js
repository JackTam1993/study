/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return 0;
    if(x <= 3) return 1;

    let left = 2;
    let right = Math.floor(x / 2);
    let mid = Math.floor((left + right) / 2);
    while (mid != left && mid != right) {
        if(mid * mid == x) {
            return mid
        } else if(mid * mid > x){
            right = mid
            mid = Math.floor((left + right) / 2);
        } else {
            left = mid
            mid = Math.floor((left + right) / 2);
        }
    }
    return Math.floor((left + right) / 2);
};
// @lc code=end
// console.log(mySqrt(9))
// console.log(mySqrt(8))
console.log(mySqrt(10))
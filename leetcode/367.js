/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPerfectSquare = function(x) {
    if(x == 0) return 0;
    if(x <= 3) return 1;

    let left = 2;
    let right = Math.floor((x / 2));
    let mid = Math.floor((left + right) / 2);
    do{
        if(mid * mid == x) {
            return mid
        } else if(mid * mid > x){
            right = mid
        } else {
            left = mid
        }
        mid = Math.floor((left + right) / 2);
    } while (mid != left && mid != right)
    return mid * mid == x;
};
// @lc code=end

console.log(isPerfectSquare(14))
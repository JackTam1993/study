/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    let right = digits.length - 1;
    while(digits[right] <= 9) {
        digits[right]++
        if(digits[right] != 10) {
            break;
        } else {
            digits[right] = 0;
            right == 0 ? digits.unshift(0) : right--
        }
    }
    
    return digits;
};
// @lc code=end

console.log(plusOne([1,2,3]))
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let length = nums.length;
    let sum = nums[0];
    let result = 1000;

    while(right < length) {
        if(sum < target) {
            right++;
            sum += nums[right]
        } else if(sum > target) {
            sum -= nums[left]
            left++;
        } else {
            if(right - left == 0) {
                //
            } else {
                result = Math.min(result, right - left);
            }
            right++;
        }
    }
    return result == 1000 ? 0 : result;
};
// @lc code=end

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(1, [1,1,1,1,1,1,1,1]))
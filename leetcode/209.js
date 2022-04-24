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
    let left = right = 0;
    let sum = nums[0];
    let result = 1000000;

    while(right < nums.length) {
        if(sum < target) {
            right++;
            sum += nums[right]
        } else if(sum >= target) {
            result = Math.min(result, right - left + 1);
            
            // 判断一下，减少left是否仍然大于target，是的话就减，不是的话就加
            let decline = sum - nums[left]
            if(decline >= target) {
                sum = decline
                left++
            } else {
                right++
                sum += nums[right]
            }
        }
    }
    return result == 1000000 ? 0 : result;
};
// @lc code=end

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(1, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(11, [1,2,3,4,5]))
console.log(minSubArrayLen(15, [1,2,3,4,5]))
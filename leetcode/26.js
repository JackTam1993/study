/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 1;

    while(fast < nums.length){
        if(nums[slow] == nums[fast]) {
            fast++
        } else {
            let temp = nums[fast];
            nums[fast] = nums[slow + 1];
            nums[slow + 1] = temp;

            slow++;
            fast++;
        }
    } 
    return slow + 1;
};
// @lc code=end
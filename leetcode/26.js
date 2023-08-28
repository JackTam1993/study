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
    let pointer = 0;

    do {
        if(nums[pointer] == nums[pointer + 1]) {
            nums.splice(pointer, 1);
            pointer--;
        } else {
            pointer++;
        }
    } while(pointer < nums.length - 1)
    return nums.length;
};
// @lc code=end
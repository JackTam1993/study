/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let f_pointer = 0;
    let s_pointer = f_pointer + k;

    if(nums.length <= 2) return nums[0] == nums[1];
    if(k == 0) return false;

    let result = false;
    while(f_pointer < nums.length) {
        let arr = nums.slice(f_pointer + 1, s_pointer + 1);
        if(arr.includes(nums[f_pointer])) {
            result = true;
            break;
        } else {
            s_pointer + 1 < nums.length ? s_pointer++ : s_pointer = nums.length - 1;
            f_pointer++;
        }
    }
    return result;
};
// @lc code=end

// console.log(containsNearbyDuplicate([0,1,2,3,2,5], 3))
// console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
// console.log(containsNearbyDuplicate([1,2,3,1], 3))
/**
 * 双指针
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] != 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp

            left++
        }
    }
};

console.log(moveZeroes([0,1,0,3,12]))

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

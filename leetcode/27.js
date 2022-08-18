/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] == val) {
//             nums.splice(i, 1)
//             i--
//         }
//     }


//     return nums.length
// };
// @lc code=end
var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length -1;

    while(left != right) {
        if(nums[left] == val) {
            let temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp;

        } else {
            left++;
        }
        
        if(nums[right] == val) {
            right--;
        }
    }

    return right + 1;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))
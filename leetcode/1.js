/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let cp_nums = nums.concat();
    let shift_length = 0

    for(let i = 0; i < nums.length; i++) {
        let current = cp_nums.shift();
        shift_length++;

        let rest = cp_nums.indexOf(target - current);
        if(rest > -1) {
            // 剩下的数组里面 有这个值
            console.log(current, i, nums.indexOf(current), shift_length)
            return [i, rest + shift_length];
        }
    }
};

const twoSum = function(nums, target) {
    const len = nums.length;
    const map = new Map();
  
    for (let i = 0; i < len; i++) {
      const needNum = target - nums[i];
  
      if (map.has(needNum) && i !== map.get(needNum)) {
        return [i, map.get(needNum)];
      }
  
      // 边读边存
      map.set(nums[i], i);
    }
  }

// @lc code=end


console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6))
console.log(twoSum([-1,-2,-3,-4,-5], -8))
/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b);
};

console.log(sortedSquares([-4,-1,0,3,10]))
// [0,1,9,16,100]
/**
 * @see https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);

    if(index != -1) {
        // 存在数组
        return index;
    } else {
        // 不存在，先推到数组内排序，再求target的索引
        nums.push(target);

        nums.sort((a, b) => a - b);
        return nums.indexOf(target);
    }
};

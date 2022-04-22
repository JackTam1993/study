/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

    let index = 0;
    let result = [];
    let length2 = nums2.length;
    let length1 = nums1.length;

    while(index < length2 && length1 != 0) {
        for(let i = 0; i < length1; i++) {
            let current = nums1[i]
            if(current == nums2[index]) {
                result.push(current)
                nums1.splice(i, 1)
                length1--;
                break;
            }
        }
        index++;
    }

    return result;
};
// @lc code=end

console.log(intersect([4,9,5], [9,4,9,8,4]))
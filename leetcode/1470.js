/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let num2 = nums.splice(n, nums.length - n);

    for(let i = 0; i < num2.length; i++) {
        nums.splice(2 * i + 1, 0, num2[i])
    }
    return nums;
};

console.log(shuffle([2,5,1,3,4,7], 3));

// [2,3,5,4,1,7]
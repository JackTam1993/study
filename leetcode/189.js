/**
 * 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length;
    let newArr = new Array(length);

    for(let i = 0; i < length; i++) {
        let index = (i + k) % length
        newArr[index] = nums[i];
    }

    for (let i = 0; i < length; ++i) {
        nums[i] = newArr[i];
    }
};

console.log(rotate([1,2,3,4,5,6,7], 3))
[1,2,3,4,5,6,7]
3
// [5,6,7,1,2,3,4]

console.log(rotate([-1,-100,3,99], 2))
// [3,99,-1,-100]

// 解法2
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotate1 = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

console.log(rotate1([1,2,3,4,5,6,7], 3))
[1,2,3,4,5,6,7]
3
// [5,6,7,1,2,3,4]

console.log(rotate1([-1,-100,3,99], 2))
// [3,99,-1,-100]
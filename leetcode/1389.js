/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
let createTargetArray = (nums, index) => {
    let target = []
    for (let i = 0; i < nums.length; i++)
        target.splice(index[i], 0, nums[i])
    return target
}

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))
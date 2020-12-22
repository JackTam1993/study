/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     let temp = 0;
//     return nums.map((item) => {
//         let result = item + temp;
//         temp = result;

//         return result
//     })
// };

var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};

console.log(runningSum([3,1,2,10,1]));
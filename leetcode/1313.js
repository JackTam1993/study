/**
 * @description: 解压缩编码列表
 * @param {number[]} nums
 * @return {number[]} 
 */
var decompressRLElist = function(nums) {
    let result = [];

    for(let i = 0; i < nums.length; i = i + 2) {
        result.push(...new Array(nums[i]).fill(nums[i + 1]))
    }

    return result;
};

// var decompressRLElist = function(nums) {
//     let result = [];

//     for(let i = 0; i < nums.length; i = i + 2) {

//         for(let j = 0; j < nums[i]; j++) {
//             result.push(nums[i + 1])
//         }
//     }

//     return result;
// };

console.log(decompressRLElist([1,1,2,3]));
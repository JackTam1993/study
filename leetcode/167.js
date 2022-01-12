// 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。


// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(numbers, target) {
//     for(let i = 0; i < numbers.length; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] + numbers[j] == target) {
//                 return [i + 1, j + 1]
//             }
//         }
//     }
// };

// console.log(twoSum([0,0,3,4], 0))
// // [1,2]

// console.log(twoSum([2,3,4], 6))
// // [1,3]

// 双指针
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum1 = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(numbers[left] + numbers[right] != target) {

        if(numbers[left] + numbers[right] > target) {
            right--
        } else if(numbers[left] + numbers[right] < target) {
            left++
        }
    }

    return [left+1, right+1]
};

console.log(twoSum1([0,0,3,4], 0))
// [1,2]

console.log(twoSum1([2,3,4], 6))
// [1,3]
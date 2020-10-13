/**
 * @description 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
 * @param {number[]} coins
 * @return {number}
 */
// var minCount = function(coins) {
//     var count = 0;

//     coins.map(item => {
//         count = count + Math.floor(item / 2) + (item % 2 == 0 ? 0 : 1);
//     })
//     return count;
// };

var minCount = function(coins) {
    var count = 0;

    for(var i of coins) {
        count = count + Math.floor(i / 2) + (i % 2 == 0 ? 0 : 1);
    }
    return count;
};

console.log(minCount([2,3,10]));
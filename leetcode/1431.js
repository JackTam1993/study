/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(item => Math.max(...candies) <= item + extraCandies);
};

console.log(kidsWithCandies([4,2,1,1,2], 1));

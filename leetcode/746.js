/**
 * @param {number[]} cost
 * @return {number}
 * @description 每次可以走1-2步，判断哪步比较小？
 */
var minCostClimbingStairs = function(cost) {
    if(!cost.length) return 0;
    if(cost.length == 1) return cost[0];

    let totalCost = new Array(cost.length);
    totalCost[0] = cost[0];
    totalCost[1] = cost[1]
    for(let i = 2; i < cost.length; i++) {
        totalCost[i] = Math.min(totalCost[i - 2] + cost[i], totalCost[i - 1] + cost[i]);
    };
    return Math.min(totalCost[cost.length - 2], totalCost[cost.length - 1]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// 15
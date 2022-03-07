/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
let dp = []
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //  if(n == 1) return 1;
    //  if(n == 2) return 2;
    for(let i = 0; i <= n; i++) {
        if(i <= 2) {
            dp[i] = i;
        } else {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
    }
    return dp[n]
};
var climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;

    return climbStairs(n - 1) + climbStairs(n - 2);
};
// @lc code=end

console.log(climbStairs(45))
console.log(dp)
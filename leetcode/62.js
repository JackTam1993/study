/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */
let map = new Map();

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 0 || n == 0) return 0
    if(m == 1 && n == 1) return 1;

    let key = m > n ? `${m}_${n}` : `${n}_${m}`;
    if(map.has(key)) {
        return map.get(key)
    } else {
        let result = uniquePaths(m-1, n) + uniquePaths(m, n-1)
        map.set(key, result)
        return result;
    }
};
// @lc code=end

console.log(uniquePaths(3,2))
console.log(uniquePaths(3,3))
console.log(uniquePaths(7,3))
console.log(uniquePaths(51,9))
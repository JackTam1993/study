/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    let dp = new Array(triangle.length).fill(null).map(item => []);

    for(let i = 0; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            if(i < 1) {
                dp[i].push(triangle[i][j])
                break;
            } else {
                let newValue = Math.min(dp[i-1]?.[j] ?? dp[i-1][j-1], dp[i-1]?.[j-1] ?? dp[i-1][j]) + triangle[i][j];
                dp[i][j] = dp[i][j] ? Math.min(newValue, dp[i][j]) : newValue
            }
        }
    }

    return Math.min.apply(null, dp[triangle.length - 1]);
};

// 11
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
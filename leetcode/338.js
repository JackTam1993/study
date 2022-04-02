/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }

    arr = arr
            .map(item => item.toString(2))
            .map(item => item.replaceAll('0', '').length)

    return arr;
};

// @lc code=end

var countBits = function(num) {
    const dp = Array(num+1).fill(0);
    for(let i = 1 ;i< num+1;i++){
        dp[i] = dp[i>>1] + (i & 1);
    }
    return dp
};

// 作者：agitated-7ederbergius
// 链接：https://leetcode-cn.com/problems/counting-bits/solution/wei-yun-suan-fu-he-dong-tai-gui-hua-by-a-lsve/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
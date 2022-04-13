/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if(rowIndex == 0) return [1];
    if(rowIndex == 1) return [1,1];

    let rowArray = new Array(rowIndex + 1).fill(1);
    let lastRow = getRow(rowIndex - 1);
    for(let i = 1; i < rowIndex; i++) {
        rowArray[i] = lastRow[i] + lastRow[i - 1]
    }

    return rowArray;
};
// @lc code=end

console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))

// f(1) = [1]
// f(2) = [1, 1]
// f(n) = []

// 1                  0
// 1 1                1
// 1 2 1              2
// 1 3 3 1            3
// 1 4 6 4 1          4
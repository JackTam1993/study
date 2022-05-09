/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 *
 *
 * @param {string} num1
 * @param {string} num2
 * @param {string} num3
 * @returns {number}
 */
var add = function(num1, num2, num3 = "0") {
    const base = 96; // 2 * 48

    let c1 = num1.charCodeAt()
    let c2 = num2.charCodeAt()
    let c3 = num3.charCodeAt()
    let rest = c1 + c2 + c3 - base;

    let isOver = rest > 48 + 10;

    return {
        isOver,
        value: String.fromCharCode(isOver ? rest - 10 : rest)
    }
}

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let length1 = num1.length
    let length2 = num2.length

    let length;
    // 不足的要补0
    if(length1 > length2) {
        length = length1;

        let zero = "";
        for(let i = 0; i < length1 - length2; i++) {
            zero += "0"
        }
        num2 = zero + num2;
    } else {
        length = length2

        let zero = "";
        for(let i = 0; i < length2 - length1; i++) {
            zero += "0"
        }
        num1 = zero + num1;
    }
    let commonArr = new Array(length).fill("0");


    for(let i = length - 1; i >= 0; i--) {
        let addResult = add(num1[i], num2[i], commonArr[i])
        commonArr[i] = addResult.value

        // 判断下有没有大于10
        if(addResult.isOver) {
            commonArr[i - 1] = "1"
        }
    }

    return commonArr.join('');
    // return commonArr
};
// @lc code=end

console.log(addStrings("11", "123")) // 134
console.log(addStrings("456", "77")) // 533
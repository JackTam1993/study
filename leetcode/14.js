// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = ''

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {

            let temp_prefix = strs[0].slice(0, i + 1);
            console.log(temp_prefix)
            if (!strs[j].slice(0, i + 1).includes(temp_prefix)) {
                break;
            } else if (j == strs.length - 1) {
                // 最后一个了
                prefix = temp_prefix
             }
        }
    }

    return prefix;

};

// fl
console.log(longestCommonPrefix(["c","acc","ccc"]))
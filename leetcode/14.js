// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // let prefix = ''

    // for (let i = 0; i < strs[0].length; i++) {
    //     for (let j = 0; j < strs.length; j++) {

    //         let temp_prefix = strs[0].slice(0, i + 1);
    //         console.log(temp_prefix)
    //         if (!strs[j].slice(0, i + 1).includes(temp_prefix)) {
    //             break;
    //         } else if (j == strs.length - 1) {
    //             // 最后一个了
    //             prefix = temp_prefix
    //          }
    //     }
    // }
    if(strs.length == 1) return strs[0];
    let prefix = '';
    let map = new Map();
    
    // 排序
    strs = strs.sort((a, b) => a.length - b.length);
    let pointer = strs[0].length;
    while(pointer >= 0) {

        for(let i = 0; i < strs.length; i++) {
            let slice = strs[i].slice(0, pointer)
            map.set(slice, slice)
        }

        // 如果map的长度超过1，就是有不一样的
        if(map.size > 1) {
            pointer--;
            map.clear();
        } else {
            break;
        }
    }

    prefix = strs[0].slice(0, pointer)

    return prefix;

};

// fl
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))
console.log(longestCommonPrefix(["flow","flower","flight"]))
console.log(longestCommonPrefix(["a","ab"]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["a", "b"]))
/**
 * @description: 写一个方法把下划线命名转成大驼峰命名
 * @param {String} str
 * @return {String} result
 */
function underline2camel(str) {
    let strArr = str.split('_');
    let result = strArr[0] + strArr[1].substring(0,1).toUpperCase() + strArr[1].substring(1, strArr[1].length)

    return result
}

console.log(underline2camel('ja_ck'))
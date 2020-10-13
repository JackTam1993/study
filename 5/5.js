/**
 * @description: 一个把字符串大小写切换的方法
 * @param {String} str 
 * @return {String} result 
 */
function upperCaseSwitch(str) {
    let strArr = [...str];
    let newArr = strArr.map(item => item.charCodeAt() >= 97 ? item.toUpperCase() : item.toLowerCase())

    return newArr.join('');
}

console.log(upperCaseSwitch('jAck'))
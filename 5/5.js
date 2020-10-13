/**
 * @description: 一个把字符串大小写切换的方法
 * @param {String} str 
 * @return {String} result 
 */
function upperCaseSwitch(str) {
    let strArr = str.split('');
    let newArr = strArr.map(item => item.charCodeAt() >= 97 ? String.fromCharCode(item.charCodeAt() - 32) : String.fromCharCode(item.charCodeAt() + 32))

    return newArr.join('');
}

console.log(upperCaseSwitch('jAck'))
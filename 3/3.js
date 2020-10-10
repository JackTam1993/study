// 去除字符串中最后一个指定的字符

function delLast(str, last) {
    let rStrArr = reverse(str).split('')
    let lastIndex = rStrArr.findIndex(item => item == last);
    rStrArr[lastIndex] = ''

    return reverse(rStrArr.join(''));
}

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(delLast('jack', 'c'))
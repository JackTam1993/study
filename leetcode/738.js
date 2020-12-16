/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let Narr = N.toString().split('');
    let result = [];

    for(let i = 0; i < Narr.length; i++) {
        let past = Narr[i - 1];
        let current = Narr[i];
        let prev = Narr[i + 1];

        if(prev > current && (past < current || past == undefined)) {
        // 后面的比当前的大，且前面的比当前小或者不存在
            result.push(current)
        } else if(prev > current && (past > current && past != undefined)) {
            // 后面的比当前的大，且前面的比当前大
            result.push(9)
        } else {
            result.push(current - 1 < 0 ? current - 1 + 10 : current - 1);
        }
    }

    return result
};

/**
 * @param {number} N
 * @return {number}
 */
var c1 = function (N) {
    let result = 0

    let start = Math.floor(N * 0.9);
    for(let i = start; i <= N; i++) {
        let iArr = [...i.toString()];

        let j = 0
        let flag = true;
        while (j <= iArr.length) {
            if(iArr[j] < iArr[j - 1]) {
                flag = false;
                break;
            }
            j++;
        }
        if(flag) result = i;
    }
    return result;
}

console.log(c1(600000));
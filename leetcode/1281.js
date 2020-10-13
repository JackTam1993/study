/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nArr = [...n.toString()];

    let mul = nArr.reduce((prev, curr) => prev * curr);
    let sum = nArr.reduce((prev, curr) => parseInt(prev) + parseInt(curr));

    return mul - sum;
};

console.log(subtractProductAndSum(234));
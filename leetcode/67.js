/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let p_a = parseInt(a, 2);
    let p_b = parseInt(b, 2);

    return BigInt(p_a + p_b).toString(2);
};

const addBinary = (a, b) => {
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    while (b != 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a.toString(2);
  };

console.log(addBinary("11", "1")) // "100"
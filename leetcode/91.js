var numDecodings = function(s) {
    const n = s.length;
    const f = new Array(n + 1).fill(0);
    f[0] = 1;
    for (let i = 1; i <= n; ++i) {
        if (s[i - 1] !== '0') {
            f[i] += f[i - 1];
        }
        if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
            f[i] += f[i - 2];
        }
    }
    return f[n];
};

console.log(numDecodings('12')) // return 2 (它可以解码为 "AB"（1 2）或者 "L"（12）。)
console.log(numDecodings('27')) // return 2 (它可以解码为 "AB"（1 2）或者 "L"（12）。)
console.log(numDecodings('06'))
console.log(numDecodings('101')) 
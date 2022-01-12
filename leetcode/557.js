/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let left = 0;
    let right = 1;
    let sArr = s.split('');

    while(right <= s.length) {
        if(sArr[right] != ' ' && right != s.length) {
            right++
        } else {
            // 遇到空格了，left和right中间的字符串颠倒
            for(let i = left, j = right - 1; i < j; i++,j--) {
                [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
            }

            right++
            left = right
        }
    }

    return sArr.join('')
};

console.log(reverseWords("Let's take LeetCode contest"))

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    if(s.length == 0) return 0;

    let count_arr = [];
    let s_arr = s.split('');
    // 模拟一个栈，把符号推进去，当“（”遇到“）”时消除
    let stack = [];
    for(let i = 0; i < s_arr.length; i++) {
        if(s_arr[i] == "(") {
            stack.push(s_arr[i])
            count_arr.push(s_arr[i])
        } else {
            // 判断前面有没有“（”，有的话就消除
            if(i > 0 && stack[stack.length - 1] == "(") {
                stack.pop();
                if(typeof count_arr[count_arr.length - 1] != 'number') {
                    count_arr.pop()
                    count_arr.push(2)
                } else {
                    let pop = count_arr.pop();
                    count_arr.push(pop + 2)
                }
            } else {
                console.log('push:' + s_arr[i])
                stack.push(s_arr[i])
                count_arr.push(s_arr[i])
            }
        }
    }
    // TODO 要合并相邻两个数字
    count_arr = count_arr.map(item => typeof item == "number" ? item : 0)

    return Math.max.apply(null, count_arr)
};

console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses("()(())"));
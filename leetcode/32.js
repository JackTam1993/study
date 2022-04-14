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
                    // pushNumber(count_arr, 2)
                } else {
                    let pop = count_arr.pop();
                    count_arr.pop();
                    count_arr.push(pop + 2)
                }
                pushNumber(count_arr);

            } else {
                stack.push(s_arr[i])
                count_arr.push(s_arr[i])
            }
        }
    }

    let sum = 0;
    let count = 0;
    count_arr.forEach(item => {
        if(typeof item != 'number') {
            count = 0;
        } else {
            count += item;
        }
        sum = Math.max(sum, count);
    })

    return sum;
};

// 推数字进去，直到只有1个数字
const pushNumber = function(stack) {

    while(typeof stack[stack.length - 2] == 'number') {
        let pop1 = stack.pop();
        let pop2 = stack.pop();
        stack.push(pop1 + pop2)
    }
}

console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses('()(()'));
console.log(longestValidParentheses("()(())"));
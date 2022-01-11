const push = ['(', '{', '['];
const pop = [')', '}', ']'];
const stack = [];

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let result;
    
    for(let i of s) {
        if(push.includes(i)) {
            stack.push(i)
        } else {
            let p = stack.pop();
            if(p != push[pop.indexOf(i)]) {
                result = false
                break
            }
        }
    }

    result = stack.length == 0 && result == undefined ? true : false;

    return result;
};

console.log(isValid("{[]}"))

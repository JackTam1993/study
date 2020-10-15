/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let temp = new Array(A.length);
    let result = []

    for(let i = 0; i < A.length; i++) {
        let arr = [...A[i]]
        for(let j = 0; j < arr.length; j++) {
            temp[i] == undefined ? temp[i] = {} : '';
            temp[i][arr[j]] == undefined ? temp[i][arr[j]] = 1 : temp[i][arr[j]]++;
        }

    }
    console.log(temp);
    // for(let i = 0; i < temp.length; i++) {
        
    // }

    return result;
};

console.log(commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"]));
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    let countlist = accounts.map(item => item.reduce((total, i) => total + i))

    countlist.map(item => {
        if(item > max) {
            max = item;
        }
    })

    return max;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let starts = []
    let ends = []

    for(let item of paths){
        starts.push(item[0])
        ends.push(item[1])
    }
    
    return ends.filter(item => !starts.includes(item)).join('')
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]));
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // res 用来存储结果
    let res = []
        // map 映射表
    let map = {}

    // 将每一个单词转成数组并排序，再转回字符串，存储到映射表
    strs.forEach(item => {
        let key = item.split('').sort().toString()
        if (key in map) {
            map[key].push(item)
        } else {
            map[key] = [item]
        }
    })

    for (let key in map) {
        res.push(map[key])
    }

    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
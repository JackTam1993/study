var addStrings = function (num1, num2) {
    let l1 = num1.length - 1
    let l2 = num2.length - 1
    let add = 0
    let total = ''
    while (l1 >= 0 || l2 >= 0 || add) {
      let t = (num1[l1] * 1 || 0) + (num2[l2] * 1 || 0) + add
      total = t % 10 + total
      add = t > 9 ? 1 : 0
      l1--
      l2--
    }
    return total
  };
  
//   作者：alexYang
//   链接：https://leetcode.cn/problems/add-strings/solution/yong-shi-ji-bai-9966-shuang-zhi-zhen-ji-nezb6/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
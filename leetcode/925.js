/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0;

    for(let j = 0; j < typed.length; j++) {
        if(name[i] == typed[j]) {
            i++
        } else if(typed[j] == name[i - 1]) {
            // nothing
        } else {
            //
        }
    }
    if (i > name.length - 1) { // 遍历结束，如果i越界了，说明i的字符也考察完了，返回true
        return true;
    }
    return false;

    
};

console.log(isLongPressedName('leelee', 'lleeelee'));
// "xnhtq"
// "xhhttqq"

// online
var isLongPressedName = function(name, typed) {
  let i = 0,
    j = 0
  while (i < name.length || j < typed.length) {
    if (name[i] === typed[j]) {
      i++
      j++
    } else if (i != 0 && name[i - 1] === typed[j]) {
      j++
    } else {
      return false
    }
  }
  return true
}
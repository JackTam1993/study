/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     if(s.length == 0) return 0;
     let final_gap = 1;
    let gap = 1;

    let L = 0;
    let R = L + gap;

    while (R < s.length) {
        // 截取字符串
        let str = s.slice(L, R);
        let next = s[R];

        // 判断str里面有没有重复元素，因为只有长度为2的情况下才会有重复，所以单独判断一下
        if(str[0] == str[1]) {
            L++;
            R++;
            continue;
        }

        if(!str.includes(next)) {
            gap++;
            R++;
        } else {
            // R++;
            if(gap > 1) {
                gap--

                // 左侧要缩短至发现重复字符的那个index
                L = R - gap;
            } else {
                L++;
                R++
            }

        }
        
        final_gap = Math.max(gap, final_gap);
    }

    return final_gap;
};

// abc 3
console.log(lengthOfLongestSubstring("abcabcbb"))

// 1
console.log(lengthOfLongestSubstring("bbbbbbbbb"))

// 3
console.log(lengthOfLongestSubstring("pwwkew"))
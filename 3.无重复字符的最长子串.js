/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  var ee = function(s) {
    for (let i = s.length; i > 1; i--) {
      for (let j = 0; j < s.length - i + 1; j++) {
        let temp = s.substring(j, i + j);
        if (new Set(temp).size === temp.length) {
          return temp.length;
        }
      }
    }
    return s ? 1 : 0;
  };
  return ee(s);
};


// @lc code=end

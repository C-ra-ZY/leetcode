/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = x < 0;
  let temp = negative ? ~x : x;
  let ret = parseInt(
    String(negative ? temp + 1 : temp)
      .split("")
      .reverse()
      .join("")
  );
  if ((ret << 1 ) >>> 0 != ret * 2) {
    return 0;
  } else {
    return negative ? ~ret + 1 : ret;
  }
};
console.log(reverse(123));

// @lc code=end

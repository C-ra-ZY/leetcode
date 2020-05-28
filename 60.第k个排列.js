/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
//   if (n === 1) {
//     return "1";
//   }
//   if (n === 0) {
//     return "";
//   }
let map=new Map();
  let step = factorial(n - 1);
  let suffix = Math.ceil(k / step);
  let ordinal = k % step;
  let material = [];
  for (let i = 1; i < n; i++) {
    material.push(i);
  }
  material.push(n);
  let ret = ``;
  while (material.length) {
    ret += material.splice(suffix - 1, 1);
    step = factorial(material.length - 1);
    suffix = Math.ceil(ordinal / step);
    ordinal = ordinal % step;
    // ret += material[suffix - 1];
  }
  return ret;
  
  function factorial(n) {
    let ret = n;
    for (let i = 1; i < n; i++) {
      ret *= i;
    }
    return ret;
  }
};

// getPermutation(4, 9);
// @lc code=end

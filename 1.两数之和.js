/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
      let remain = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if ( nums[j] === target) {
        result = [i, j];
        break;
      }
    }
  }
  return result;
};
// @lc code=end

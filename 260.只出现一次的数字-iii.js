/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	let ret = [];
	nums.sort((a, b) => a - b);
	let index = 0;
	while (index < nums.length) {
		if (nums[index] === nums[index + 1]) {
			index += 2;
		} else {
			ret.push(nums[index]);
			index++;
		}
	}
	return ret;
};
// @lc code=end

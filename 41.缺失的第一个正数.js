/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	let pool = [true],
		index = 0;
	while (index < nums.length) {
		let item = nums[index];
		if (item > 0 && !pool[item]) {
			pool[item] = true;
		}
		index++;
	}
	pool.push(undefined);
	return pool.findIndex((e) => !e);
};
// firstMissingPositive([1, 2, 0]);
// @lc code=end

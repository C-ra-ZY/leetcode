/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let max = 0; 
	for (let index = 0; index < nums.length; index++) {
		if (max < index) return false; 
		max = Math.max(index + nums[index], max);
	}
	return max >= nums.length - 1;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let max = 0;
	while (height.length) {
		let length = height.length;
		let temp = (height[0] < height[length - 1] ? height[0] : height[length - 1]) * (length - 1);
		temp > max && (max = temp);
		height[0] < height[length - 1] ? height.shift() : height.pop();
	}
	return max;
};

// @lc code=end

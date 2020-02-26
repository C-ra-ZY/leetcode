/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let index = 1,
		ved = false,
		temp = 0,
		total = 0,
		startV,
		endV,
		bottomV;
	height = [-Infinity, ...height, -Infinity];
	while (index < height.length - 1) {
		if (height[index - 1] > height[index] && height[index] <= height[index + 1]) {
			bottomV = index;
		} else if (height[index] >= height[index - 1] && height[index] > height[index + 1]) {
			startV = index;
		} else if (height[index - 1] < height[index] && height[index] >= height[index + 1]) {
			if (startV) {
				endV = index;
				let top = Math.min(height[startV], height[endV]);
				height.slice(startV + 1, endV - 1).forEach((e) => {
					total += top - e;
				});
			}
		}
		index++;
	}
	return total;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// @lc code=end

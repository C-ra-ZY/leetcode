/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let index = 0;
	while (index < nums.length) {
		if (nums[index] === val) {
			nums.splice(index, 1);
		} else {
			index++;
		}
	}
	return index;
};
// @lc code=end

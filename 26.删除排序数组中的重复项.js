/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let index = 1,
		counter = 1;
	while (index < nums.length) {
		if (nums[index - 1] !== nums[index]) {
			nums[counter++] = nums[index];
		}
		index++;
	}
	return counter;
};
// @lc code=end

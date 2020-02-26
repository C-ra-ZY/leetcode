/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if (nums[0] > target) {
		return 0;
	}
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] === target) {
			return index;
		} else if (nums[index] < target && nums[index + 1] > target) {
			return index + 1;
		} else if (index == nums.length - 1) {
			return nums.length;
		}
	}
};
// searchInsert([1, 3, 5, 6], 7);
// searchInsert(new Array(10000).fill(0).map((e, index) => index - 5000), 1309);
// @lc code=end

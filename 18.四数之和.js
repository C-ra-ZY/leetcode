/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	let { length } = nums;
	if (length < 4) {
		return [];
	}
	nums.sort((a, b) => a - b);
	let i = 0,
		result = [];
	while (i < length - 3) {
		let h = i + 1;
		while (h < length - 2) {
			let j = h + 1,
				k = length - 1;
			while (k > j) {
				if (target === nums[i] + nums[h] + nums[j] + nums[k]) {
					result.push([nums[i], nums[h], nums[j], nums[k]]);
					while (nums[j] === nums[++j]) {}
					while (nums[k] === nums[--k]) {}
				} else if (nums[i] + nums[h] + nums[j] + nums[k] > target) {
					while (nums[k] === nums[--k]) {}
				} else {
					while (nums[j] === nums[++j]) {}
				}
			}
			while (nums[h] === nums[++h]) {}
		}
		while (nums[i] === nums[++i]) {}
	}
	return result;
};
// fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
// @lc code=end

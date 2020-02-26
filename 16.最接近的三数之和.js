/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	let { length } = nums;
	if (length < 3) {
		return [];
	}
	nums.sort((a, b) => a - b);
	let sum,
		compare = Infinity;
	for (let i = 0; i < length - 2; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let j = i + 1,
			k = length - 1,
			candidate;
		while (k > j) {
			candidate = nums[i] + nums[j] + nums[k];
			if (candidate === target) {
				return nums[i] + nums[j] + nums[k];
			} else {
				let abs = Math.abs(candidate - target);
				if (abs < compare) {
					compare = abs;
					sum = nums[i] + nums[j] + nums[k];
				}
				if (candidate > target) {
					k--;
				} else {
					j++;
				}
			}
		}
	}
	return sum;
};
// @lc code=end

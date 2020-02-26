/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let { length } = nums;
	if (length < 3) {
		return [];
	}
	nums.sort((a, b) => a - b);
	if (nums[0] > 0 || nums[length - 1] < 0) {
		return [];
	}
	let result = [];
	for (let i = 0; i < length - 2; i++) {
		if (nums[i] > 0) {
			break;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let j = i + 1,
			k = length - 1,
			succeededJ,
			succeededK,
			candidate;
		while (k > j) {
			if (nums[k] === succeededK) {
				k--;
				continue;
			}
			if (nums[j] === succeededJ) {
				j++;
				continue;
			}
			candidate = nums[i] + nums[j] + nums[k];
			if (candidate == 0) {
				result.push([nums[i], nums[j], nums[k]]);
				succeededJ = nums[j];
				succeededK = nums[k];
			} else if (candidate > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return result;
};
// @lc code=end

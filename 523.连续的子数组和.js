/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	// let dp = [];
	if (nums.length < 2) {
		return false;
	}
	let length = nums.length;
	// for (let i = 0; i < nums.length; i++) {
	// 	let value = nums[i];
	// 	dp[i * length + i] = value;
	// }
	for (let i = 1; i < length; i++) {
		let pre = nums[i];
		for (let j = i - 1; j > -1; j--) {
			pre += nums[j];
			if (pre % k === 0 || pre === k) {
				return true;
			}
			// // let value1 = dp[i * length + j] + nums[j];
			// let value1 = dp[i * length + j + 1] + nums[j];
			// // let value2 = dp[(i - 1) * length + j] + nums[i];
			// if (value1 % k === 0 || value1 === k) {
			// 	return true;
			// } /*  else if (value2 % k === 0) {
			//     return true
			// } */ else {
			// 	dp[i * length + j] = value1;
			// }
		}
	}
	return false;
};
// @lc code=end

// checkSubarraySum([1, 0, 1, 0, 1], 4);

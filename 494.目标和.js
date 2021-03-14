/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

const {add} = require("nconf");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
	let dp = new Map();
	let dp0 = new Map();
	dp.set(0, dp0);
	dp0.set(nums[0], (dp0.get(nums[0]) || 0) + 1);
	dp0.set(-nums[0], (dp0.get(-nums[0]) || 0) + 1);
	let index = 1;
	while (index < nums.length) {
		let levelDp = new Map();
		dp.set(index, levelDp);
		// console.log(JSON.stringify([...dp.get(index - 1).entries()]));
		for (let [sum, count] of dp.get(index - 1).entries()) {
			let added = sum + nums[index],
				minused = sum - nums[index];
			levelDp.set(added, (levelDp.get(added) || 0) + count);
			levelDp.set(minused, (levelDp.get(minused) || 0) + count);
		}
		index++;
	}
	// console.log(JSON.stringify([...dp.get(nums.length - 1).entries()]));
	return dp.get(nums.length - 1).get(S) || 0;
};
// @lc code=end

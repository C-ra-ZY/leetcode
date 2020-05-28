/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	if (nums.length < 2) {
		return 0;
	}

	let {length} = nums;
	let cache = new Set();
	cache.add(0);

	let step = 0;
	while (true) {
		let tempCache = new Set();
		for (let index of cache) {
			if (nums[index] > length - index - 2) {
				return step + 1;
			} else {
				let tempIndex = nums[index];
				while (tempIndex > 0) {
					// if (!tempCache.has(index + tempIndex)) {
					tempCache.add(index + tempIndex--);
					// }
				}
			}
		}
		cache = tempCache;
		step++;
	}

};
// @lc code=end

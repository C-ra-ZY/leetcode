/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumII = function(candidates, target) {
	function calc(candidates, target) {
		if (target < 1) {
			return;
		}
		let temp = [];
		// index = 0;
		while (candidates.length) {
			// for (let index = 0; index < candidates.length; index++) {
			if (target === candidates[0]) {
				temp.push([candidates[0]]);
			} else if (target > candidates[0]) {
				let got = calc([...candidates], target - candidates[0]);
				if (got instanceof Array && got.length) {
					got.forEach((e) => {
						e.push(candidates[0]);
						temp.push(e);
					});
				}
			}
			candidates.shift();
		}
		return temp;
	}
	return calc(candidates, target);
};
// @lc code=end

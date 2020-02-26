/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	function calc(candidates, target) {
		if (target < 1) {
			return;
		}
		let temp = [];
		// index = 0;
		while (candidates.length) {
			let item = candidates[0];
			// for (let index = 0; index < candidates.length; index++) {
			if (target === item) {
				temp.push([item]);
			} else if (target > item) {
				let got = calc(candidates.slice(1), target - item);
				if (got instanceof Array && got.length) {
					got.forEach((e) => {
						e.push(item);
						temp.push(e);
					});
				}
			}
			let index = candidates.findIndex((e) => e != item);
			if (index > -1) {
				candidates = candidates.splice(index);
			} else {
				candidates.length = 0;
			}
		}
		return temp;
	}
	candidates.sort((a, b) => a - b);
	return calc(candidates, target);
	// let res = calc(candidates, target),
	// 	set = new Set();
	// res.forEach((e) => {
	// 	e.sort((a, b) => a - b);
	// 	let str = e.join(",");
	// 	!set.has(str) && set.add(str);
	// });
	// return [...set].map((e) => e.split(","));
};
// combinationSum2([1, 1], 1);
// @lc code=end

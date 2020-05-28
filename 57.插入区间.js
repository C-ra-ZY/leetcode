/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if (!newInterval.length) {
		return intervals;
	}

	intervals.push(newInterval);
	intervals.sort((a, b) => {
		return a[0] - b[0];
	});
	if (intervals.length > 1) {
		let remain = null;
		let result = [];
		while (intervals.length) {
			let pairs;
			if (!remain) {
				pairs = intervals.splice(0, 2);
			} else {
				pairs = [remain, intervals.shift()];
			}
			if (pairs[0][1] >= pairs[1][0]) {
				remain = [Math.min(pairs[0][0], pairs[1][0]), Math.max(pairs[0][1], pairs[1][1])];
			} else {
				remain = pairs[1];
				result.push(pairs[0]);
			}
		}
		if (remain) {
			result.push(remain);
		}
		return result;
	} else {
		return intervals;
	}
};
// @lc code=end

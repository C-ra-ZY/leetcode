/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	// if (intervals.length > 1) {
	// 	let remain = null;
	// 	let result = [];
	// 	while (intervals.length) {
	// 		let pairs;
	// 		if (!remain) {
	// 			pairs = intervals.splice(0, 2);
	// 		} else {
	// 			pairs = [remain, intervals.shift()];
	// 		}
	// 		if (pairs[0][1] >= pairs[1][0]) {
	// 			remain = [Math.min(pairs[0][0], pairs[1][0]), Math.max(pairs[0][1], pairs[1][1])];
	// 		} else {
	// 			remain = pairs[1];
	// 			result.push(pairs[0]);
	// 		}
	// 	}
	// 	if (remain) {
	// 		result.push(remain);
	// 	}
	// 	return result;
	// } else {
	// 	return intervals;
	// }

	let temp = [];
	for (let interval of intervals) {
		for (let index = interval[0] * 2; index <= interval[1] * 2; index++) {
			temp[index] = true;
		}
	}

	let result = [],
		started = false,
		truck = [];
	for (let index = 0; index < temp.length + 1; index++) {
		if (temp[index] && started === false) {
			started = true;
			truck.push(index / 2);
		} else if (!temp[index] && started === true) {
			started = false;
			truck.push((index - 1) / 2);
			result.push(truck);
			truck = [];
		}
	}
	return result;
};
// @lc code=end

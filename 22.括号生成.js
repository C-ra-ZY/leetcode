/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var ret = [[""]];
	for (let i = 1; i < n + 1; i++) {
		let temp = [];
		for (let j = 0; j < i; j++) {
			let strsJ = ret[j],
				strsLeft = ret[i - 1 - j];
			for (let str of strsJ) {
				for (let left of strsLeft) {
					temp.push(`(${str})${left}`);
				}
			}
		}
		ret.push(temp);
	}

	// function recursion(left, right, proxy) {
	// 	if (left == 0 && right == 0) {
	// 		ret.push(proxy);
	// 	} else {
	// 		if (left < right) {
	// 			if (left > 0) {
	// 				recursion(left - 1, right, proxy + "(");
	// 			}
	// 			if (right > 0) {
	// 				recursion(left, right - 1, proxy + ")");
	// 			}
	// 		} else {
	// 			recursion(left - 1, right, proxy + "(");
	// 		}
	// 	}
	// }
	// recursion(n, n, "");
	return ret[n];
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
	if (!s.length || !t.length) {
		return 0;
	}
	let formerLine = [];
	let count0 = 0;
	for (let index = 0; index < s.length; index++) {
		if (s[index] === t[0]) {
			count0++;
		}
		formerLine.push(count0);
	}
	for (let i = 1; i < t.length; i++) {
		let thisLine = new Array(s.length).fill(0);
		for (let j = i; j < s.length; j++) {
			if (s[j] === t[i]) {
				thisLine[j] = formerLine[j - 1] + thisLine[j - 1];
			} else {
				thisLine[j] = thisLine[j - 1];
			}
		}
		formerLine = thisLine;
	}
	return formerLine.pop();
};
// @lc code=end
// numDistinct("rabbbit", "rabbit");

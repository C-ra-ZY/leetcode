/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let commonPreFix = "";
	let minLen = strs.length ? Math.min.apply(null, strs.map((e) => e.length)) : 0;
	let index = 0;
	while (index < minLen) {
		let test = strs[0][index];
		if (strs.map((e) => e[index]).some((e) => e != test)) {
			break;
		} else {
			commonPreFix += test;
		}
		index++;
	}
	return commonPreFix;
};
// @lc code=end

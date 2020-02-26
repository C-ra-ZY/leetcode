/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var spaceRegExec = /\S/.exec(str);
	var preRegExec = /\d/.exec(str);
	if (
		spaceRegExec &&
		preRegExec &&
		preRegExec.index != spaceRegExec.index &&
		preRegExec.index != spaceRegExec.index + 1
	) {
		return 0;
	}
	var reg = /(?<!\S)[+-]?\d+/;
	var matches = str.match(reg);
	if (!matches) {
		return 0;
	}
	var value = parseInt(matches[0]);
	if (value < -Math.pow(2, 31)) {
		return -Math.pow(2, 31);
	}
	if (value > Math.pow(2, 31) - 1) {
		return Math.pow(2, 31) - 1;
	}
	return value;
};
// myAtoi("42");
// @lc code=end

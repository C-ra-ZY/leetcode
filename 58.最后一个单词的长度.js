/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let reg = /\b\S+\b/g;
	let match = s.match(reg);
	return match ? match[match.length - 1].length : 0;
};
// @lc code=end

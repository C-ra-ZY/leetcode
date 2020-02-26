/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	return (
		1000 * /(?<!C)M*/.exec(s)[0].length +
		(/CM/.test(s) ? 900 : /(?<!C)D/.test(s) ? 500 : /CD/.test(s) ? 400 : 0) +
		(/(?<!X)C+(?!D|M)/.test(s) ? 100 * /C+(?!D)/.exec(s)[0].length : 0) +
		(/XC/.test(s) ? 90 : /(?<!X)L/.test(s) ? 50 : /XL/.test(s) ? 40 : 0) +
		(/(?<!I)X+(?!L|C)/.test(s) ? 10 * /X+(?!L)/.exec(s)[0].length : 0) +
		(/IX/.test(s) ? 9 : /(?<!I)V/.test(s) ? 5 : /IV/.test(s) ? 4 : 0) +
		(/I+(?!V|X)/.test(s) ? 1 * /I+(?!V)/.exec(s)[0].length : 0)
	);
};
// @lc code=end

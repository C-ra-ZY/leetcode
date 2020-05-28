/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	num1 = num1
		.split("")
		.map(parseInt)
		.reverse();
	num2 = num2
		.split("")
		.map(parseInt)
		.reverse();
	let digitalByte = Math.max(num1.length, num2.length);
	let long = num1.length > num2.length ? num1 : num2;
	let short = num1.length > num2.length ? num2 : num1;
	let index = 0;
	while (index < digitalByte) {
		let temp = long[index] * (short[index] || 0);
		if (temp > 9) {
			long[index] = temp - 10;
			long[index + 1] = (long[index + 1] || 0) + 1;
		} else {
			long[index] = temp;
		}
		index++;
	}
	return long.reverse().join("");
};
// @lc code=end

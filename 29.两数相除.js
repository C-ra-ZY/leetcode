/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
	if (dividend === 0) {
		return 0;
	} else {
		let isPosi = (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0);
		divisor = Math.abs(divisor);
		let calc = 0,
			index = 1,
			left = Math.abs(dividend),
			storedDivisor = divisor;
		while (left >= divisor) {
			left = left - divisor;
			divisor += storedDivisor;
			calc += index++;
		}
		let newCalc = calc;
		while (left > storedDivisor) {
			divisor -= storedDivisor;
			if (left >= divisor) {
				left -= divisor;
				newCalc += --index;
			} else {
				index--;
			}
		}
		newCalc = isPosi ? newCalc : -1 * newCalc;
		if (newCalc < -Math.pow(2, 31) || newCalc > Math.pow(2, 31) - 1) {
			return Math.pow(2, 31) - 1;
		}
		return newCalc;
	}
};
// @lc code=end

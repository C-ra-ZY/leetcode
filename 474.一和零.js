/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

const {find} = require("underscore");

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
	let zereReg = /0/g,
		oneReg = /1/g;
	let totalZero = 0;
	let totalOne = 0;
	for (let index = 0; index < strs.length; index++) {
		let zeroCount = (strs[index].match(zereReg) || []).length;
		let oneCount = (strs[index].match(oneReg) || []).length;
		totalZero += zeroCount;
		totalOne += oneCount;
		strs[index] = {zeroCount, oneCount, value: strs[index]};
	}

	let index = strs.length;
	let record = {zeroCount: totalZero, oneCount: totalOne};
	if (record.zeroCount <= m && record.oneCount <= n) {
		return index;
	}
	while (index > 0) {
		index--;
		for (let strIndex = 0; strIndex < strs.length; strIndex++) {
			if (
				record.zeroCount - strs[strIndex].zeroCount <= m &&
				record.oneCount - strs[strIndex].oneCount <= n
			) {
				strs.splice(strIndex, 1);
				return strs.length;
			}
		}
		if (record.zeroCount - m >= record.oneCount - n) {
			let mostZeroItem = strs
				.sort((a, b) => {
					return a.zeroCount - b.zeroCount;
				})
				.pop();

			record = {
				zeroCount: record.zeroCount - mostZeroItem.zeroCount,
				oneCount: record.oneCount - mostZeroItem.oneCount,
			};
		} else {
			let mostOneItem = strs
				.sort((a, b) => {
					return a.oneCount - b.oneCount;
				})
				.pop();
			record = {
				zeroCount: record.zeroCount - mostOneItem.zeroCount,
				oneCount: record.oneCount - mostOneItem.oneCount,
			};
		}
	}
	return index;
};
// @lc code=end

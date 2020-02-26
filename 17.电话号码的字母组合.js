/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if (!digits) {
		return [];
	}
	let map = new Map([
		["2", ["a", "b", "c"]],
		["3", ["d", "e", "f"]],
		["4", ["g", "h", "i"]],
		["5", ["j", "k", "l"]],
		["6", ["m", "n", "o"]],
		["7", ["p", "q", "r", "s"]],
		["8", ["t", "u", "v"]],
		["9", ["w", "x", "y", "z"]]
	]);
	let cartesianProduct = function(arr1, arr2) {
		let ret = [];
		for (let item1 of arr1) {
			for (let item2 of arr2) {
				ret.push(item1 + item2);
			}
		}
		return ret;
	};
	let result = map.get(digits[0]);
	for (let digit of digits.substr(1, digits.length)) {
		result = cartesianProduct(result, map.get(digit));
	}
	return result;
};
// @lc code=end

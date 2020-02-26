/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	var volume = numRows > 1 ? numRows * 2 - 2 : 1;
	var value = new Array(numRows).fill("");
	var { length } = s;
	for (var index = 0; index < length; index++) {
		var valueIndex = index % volume;
		var target = valueIndex < numRows ? valueIndex : volume - valueIndex;
		value[target] += s[index];
	}

	return value.join("");
};

// @lc code=end

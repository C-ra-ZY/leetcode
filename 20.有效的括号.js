/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let arr = [];
	for (let char of s) {
		switch (char) {
			case "{":
			case "[":
			case "(":
				arr.push(char);
				break;
			case "}":
				if (arr[arr.length - 1] !== "{") {
					return false;
				} else {
					arr.pop();
				}
				break;
			case "]":
				if (arr[arr.length - 1] !== "[") {
					return false;
				} else {
					arr.pop();
				}
				break;
			case ")":
				if (arr[arr.length - 1] !== "(") {
					return false;
				} else {
					arr.pop();
				}
				break;
		}
	}
	return !!!arr.length;
};
// @lc code=end

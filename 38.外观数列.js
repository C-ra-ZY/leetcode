/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	switch (n) {
		case 1:
			return "1";
		case 2:
			return "11";
		default:
			let index = 3;
			let former = "11",
				ret = "";
			while (index < n + 1) {
				let count = 1,
					i = 1;
				ret = "";
				while (i < former.length) {
					if (former[i] === former[i - 1]) {
						count++;
					} else {
						ret += `${count}${former[i - 1]}`;
						count = 1;
					}
					i++;
				}
				ret += `${count || 1}${former[former.length - 1]}`;
				former = ret;
				index++;
			}
			return ret;
	}
};
// countAndSay(5);
// @lc code=end

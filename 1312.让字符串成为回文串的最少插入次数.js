/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
	let dp = new Array(s.length)
		.fill(undefined)
		.map(() => new Array(s.length).fill(0));

	for (let i = s.length - 2; i > -1; i--) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = dp[i + 1][j - 1];
			} else {
				dp[i][j] = Math.min(dp[i][j - 1], dp[i + 1][j]) + 1;
			}
		}
		// console.log(JSON.stringify(dp));
	}
	// console.log(JSON.stringify(dp));
	return dp[0].pop();
};
// @lc code=end
// minInsertions("leetcode");

/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
	let {length} = s;
	dp = new Array(length).fill(1);
	for (let i = length - 2; i > -1; i--) {
		let pre = 0;
		for (let j = i + 1; j < length; j++) {
			let temp = dp[j];
			if (s[i] === s[j]) {
				dp[j] = pre + 2;
			} else {
				dp[j] = Math.max(dp[j], dp[j - 1]);
			}
			pre = temp;
		}
	}
	// console.log(JSON.stringify(dp));
	return dp[length - 1];
};
// @lc code=end

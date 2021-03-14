/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	if (!word1.length || !word2.length) {
		return Math.max(word1.length, word2.length);
	}
	let [shortWord, longWord] = [word1, word2].sort(
		(a, b) => a.length - b.length
	);
	let dp = [];
	for (let index = 0; index <= shortWord.length; index++) {
		dp.push(index);
	}

	for (let i = 1; i <= longWord.length; i++) {
		let lineDp = [i];
		/* console.log(`${i} loop`);
		console.log(JSON.stringify(dp));
		console.log(`--------------`); */
		for (let j = 1; j <= shortWord.length; j++) {
			if (longWord[i - 1] === shortWord[j - 1]) {
				lineDp[j] = dp[j - 1];
			} else {
				lineDp[j] = Math.min(dp[j] + 1, lineDp[j - 1] + 1, dp[j - 1] + 1);
			}
		}
		dp = lineDp;
	}
	/* console.log(JSON.stringify(dp)); */

	return dp.pop();
};
// @lc code=end

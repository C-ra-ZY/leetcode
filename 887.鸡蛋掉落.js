/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
	let dp = [];
	for (let index = 0; index < k + 1; index++) {
		dp.push(new Array(n).fill(undefined).map((e) => 0));
	}
	let m = 0;
	while (dp[k][m] < n) {
		m++;
		for (let i = 1; i <= k; i++) {
			dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
		}
	}
	return m;

	/* 基础版本的动态规划
	let map = new Map();
	for (let i = 1; i <= n; i++) {
		map.set(`${1},${i}`, i);
	}
	for (let j = 0; j <= k; j++) {
		map.set(`${j},${0}`, 0);
	}

	for (let j = 2; j <= k; j++) {
		for (let i = 1; i <= n + 1; i++) {
			for (let h = 1; h <= i; h++) {
				let origin = map.get(`${j},${i}`);
				if (origin === undefined) {
					origin = Infinity;
				}
				let sui = map.get(`${j - 1},${h - 1}`);
				let meisui = map.get(`${j},${i - h}`);
				map.set(`${j},${i}`, Math.min(origin, Math.max(sui, meisui) + 1));
			}
		}
		
	}
	return map.get(`${k},${n}`); */
};
// @lc code=end
// superEggDrop(2, 6);

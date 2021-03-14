/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

const {from} = require("form-data");
const {key} = require("nconf");

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
	if (arr.length < 3) {
		return 0;
	}
	let set = new Set(arr);
	let max = 2;
	let map = new Map();
	for (let i = 2; i < arr.length; i++) {
		for (let j = i - 1; j > 0; j--) {
			// let length = map.get(`${arr[i] - arr[j]},${arr[j]}`);
			let length = map.get(Math.pow(arr[j], 3) - Math.pow(arr[i] - arr[j], 3));
			if (length) {
				// map.set(`${arr[j]},${arr[i]}`, length + 1);
				map.set(Math.pow(arr[i], 3) - Math.pow(arr[j], 3), length + 1);
				/* if (arr[i] * arrLen + arr[j] === 204) {
					console.log(length + 1);
					console.log(arr[j], arr[i]);
					console.log(arr[j] * arrLen + arr[i] - arr[j]);
				} */
				if (length + 1 > max) {
					max = length + 1;
				}
				// `${arr[i] - arr[j]},${arr[j]}`
				// map.delete(arr[j] * arrLen + arr[i] - arr[j]);
			} else if (set.has(arr[i] - arr[j]) && arr[i] - arr[j] < arr[j]) {
				// map.set(`${arr[j]},${arr[i]}`, 3);
				map.set(Math.pow(arr[i], 3) - Math.pow(arr[j], 3), 3);
				if (3 > max) {
					max = 3;
				}
			}
		}
	}
	// console.log(JSON.stringify([...map.entries()]));
	if (max < 3) {
		return 0;
	} else {
		return max;
	}
};
// @lc code=end
/* 
console.log(
	lenLongestFibSubseq([4,5,6,10,11,14,15,17,18,20,28,32,35,50,55])
); */

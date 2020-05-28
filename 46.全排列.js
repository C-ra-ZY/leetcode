/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	let ret = [[nums[0]]];
	for (let index = 1; index < nums.length; index++) {
		let tempRet = [];
		for (let child of ret) {
			let tempIndex = 0;
			while (tempIndex < child.length + 1) {
				tempRet.push(insertInto(child, nums[index], tempIndex++));
			}
		}
		ret = tempRet;
	}

	function insertInto(arr, value, index) {
		return [...arr.slice(0, index), value, ...arr.slice(index)];
	}
	return ret;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);
	let ret = [[nums[0]]];
	for (let index = 1; index < nums.length; index++) {
        let tempRet = [];
		for (let child of ret) {
			let tempIndex = 0;
			while (tempIndex < child.length + 1) {
                tempRet.push(insertInto(child, nums[index], tempIndex++));
                if(child[tempIndex]===nums[index]){
                    tempIndex++;
                }
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

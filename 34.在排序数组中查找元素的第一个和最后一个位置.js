/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	// function calcIndex(start, end) {
	// 	return Math.floor((end - start) / 2);
	// }

	let { length } = nums;
	if (length == 0) {
		return [-1, -1];
	}
	let middle = Math.floor(length / 2);
	let end = (start = -2);
	if (nums[middle] > target) {
		let index = middle - 1;
		while (index > -1) {
			if (nums[index] == target) {
				if (end < -1) {
					end = index;
				}
				start = index;
			}
			index--;
		}
	} else if (nums[middle] < target) {
		let index = middle;
		while (index < length) {
			if (nums[index] == target) {
				if (start < -1) {
					start = index;
				}
				end = index;
			}
			index++;
		}
	} else {
		let index = middle;
		while (nums[++index] === target && index < length) {}
		end = index - 1;
		index = middle;
		while (nums[--index] === target && index > -1) {}
		start = index + 1;
	}
	return [start < -1 ? -1 : start, end < -1 ? -1 : end];
};
// searchRange([1, 2, 3], 3);
// @lc code=end

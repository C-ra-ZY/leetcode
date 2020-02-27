/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
	function calc(arr) {
		if (arr.length < 3) {
			return 0;
		}
		let temp = 0,
			base = Math.min(arr[0], arr[arr.length - 1]),
			index = 1;
		while (index < arr.length - 1) {
			temp += base - arr[index];
		}
		return temp;
	}

	function rec(arr) {
		let highest = Math.max.apply(null, arr);
		let temp = 0;
		let leftArr, rightArr;
		temp += calc(arr.slice([arr.indexOf(highest)], arr.lastIndexOf[highest] + 1));

		


		leftArr = arr.slice(0, arr.indexOf(highest));
		rightArr = arr.slice(arr.lastIndexOf(highest) + 1);
		if (highestIndexes[0] !== 0) {
			temp += trap(heights.slice(0, highestIndexes[0]));
		}
		if (highestIndexes[highestIndexes.length - 1] !== heights.length - 1) {
			temp += trap(heights.slice(highestIndexes[highestIndexes.length - 1]));
		}
		return temp;
	}
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// @lc code=end

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
var trap = function(height) {
	function calc(start, end) {
		if (end - start < 2) {
			return 0;
		}
		let temp = 0,
			base = Math.min(height[start], height[end]),
			index = start + 1;
		while (index < end) {
			temp += base - height[index];
			index++;
		}
		return temp;
	}

	function lastIndex(start, end, target) {
		let index = end;
		while (index > start - 1) {
			if (height[index] === target) {
				return index;
			}
			index--;
		}
		return -1;
	}

	function firstIndex(start, end, target) {
		let index = start;
		while (index < end + 1) {
			if (height[index] === target) {
				return index;
			}
			index++;
		}
		return -1;
	}

	function max(start, end) {
		let max = -Infinity;
		for (let index = start; index < end + 1; index++) {
			if (height[index] > max) {
				max = height[index];
			}
		}
		return max;
	}

	function rec(start, end) {
		if (end - start < 2) {
			return 0;
		}
		let highest = max(start, end);
		let temp = 0;
		let last = lastIndex(start, end, highest),
			first = firstIndex(start, end, highest);
		if (last != first) {
			temp += calc(first, last);
			temp += rec(start, first);
			temp += rec(last, end);
		} else if (first == end) {
			let second = max(start, end - 1);
			let secondIndex = firstIndex(start, end - 1, second);
			temp += calc(secondIndex, end);
			temp += rec(start, secondIndex);
		} else if (last == start) {
			let second = max(start + 1, end);
			let secondIndex = lastIndex(start + 1, end, second);
			temp += calc(start, secondIndex);
			temp += rec(secondIndex, end);
		} else {
			temp += rec(first, end);
			temp += rec(start, first);
		}
		return temp;
	}
	return rec(0, height.length - 1);
};
// trap([2, 0, 2]);
// @lc code=end

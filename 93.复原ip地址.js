/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	if (s.length < 4 || s.length > 12) {
		return [];
	}

	let tasks = [[0]];
	let results = [];
	while (tasks.length) {
		let tempTasks = [];
		for (let task of tasks) {
			let last = task[task.length - 1];
			if (task.length == 4) {
				let lastPart = s.substr(last);
				if (
					lastPart.length &&
					lastPart.length < 4 &&
					(lastPart == "0" || !lastPart.startsWith("0")) &&
					lastPart < 256
				) {
					results.push(task);
				}
			}
			if (last > s.length - 1) {
				// tempTasks.push(task);
				continue;
			}
			if (s[last] == "0") {
				tempTasks.push([...task, last + 1]);
			} else if (s[last] > 0 && s[last] < 3) {
				tempTasks.push([...task, last + 1]);
				tempTasks.push([...task, last + 2]);
				s.substr(last, 3) < 256 && tempTasks.push([...task, last + 3]);
			} else if (s[last] > 2) {
				tempTasks.push([...task, last + 1]);
				tempTasks.push([...task, last + 2]);
			}
		}
		tasks = tempTasks;
	}
	let ret = [];
	for (let result of results) {
		let str = s;
		for (let index = result.length - 1; index > 0; index--) {
			str =
				str.substring(0, result[index]) + "." + str.substring(result[index]);
		}
		ret.push(str);
	}
	// console.log(JSON.stringify(ret));
	return ret;
};
// @lc code=end
// restoreIpAddresses("25525511135");

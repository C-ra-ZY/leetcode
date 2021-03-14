/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let taskStack = [],
		index = 0;
	s = `(${s})`;
	while (index < s.length) {
		let lastTask = taskStack[taskStack.length - 1];
		switch (s[index]) {
			case "(":
				taskStack.push({taskResult: 0, taskOperator: 1});
				break;
			case ")":
				let popedTask = taskStack.pop();
				if (taskStack.length) {
					taskStack[taskStack.length - 1].taskResult +=
						taskStack[taskStack.length - 1].taskOperator * popedTask.taskResult;
				} else {
					return popedTask.taskResult;
				}
				break;
			case "+":
				lastTask.taskOperator = 1;
				break;
			case "-":
				lastTask.taskOperator = -1;
				break;
			case " ":
				break;
			default:
				let start = index;
				while (/\d/.test(s[++index])) {}
				lastTask.taskResult += lastTask.taskOperator * s.slice(start, index);
				index--;
				break;
		}
		index++;
	}
};
// @lc code=end
// calculate("1 + 1");

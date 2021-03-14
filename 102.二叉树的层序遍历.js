/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	let tasks = [root];
	let result = [];
	while (tasks.length) {
		let levelResult = [];
		result.push(levelResult);
		let tempTasks = [];
		for (let task of tasks) {
			if (!task || task.val === null) {
				continue;
			}
			levelResult.push(task.val);
			task.left && tempTasks.push(task.left);
			task.right && tempTasks.push(task.right);
		}
		tasks = tempTasks;
	}
	return result;
};
// @lc code=end

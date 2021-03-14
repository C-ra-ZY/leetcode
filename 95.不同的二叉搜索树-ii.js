/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
	let map = new Map();
	for (let index = 1; index <= n; index++) {
		map.set(`${index},${index}`, [new TreeNode(index)]);
		if (index < n) {
			map.set(`${index},${index + 1}`, [
				new TreeNode(index, null, new TreeNode(index + 1)),
				new TreeNode(index + 1, new TreeNode(index), null),
			]);
		}
	}
	let iterN = 3;
	while (iterN <= n) {
		for (let i = 1; i <= n - iterN + 1; i++) {
			let _result = [];
			for (let j = i; j <= i + iterN - 1; j++) {
				let left = map.get(`${i},${j - 1}`) || [null];
				let right = map.get(`${j + 1},${i + iterN - 1}`) || [null];
				for (const leftNode of left) {
					for (const rightNode of right) {
						let node = new TreeNode(j);
						node.left = leftNode;
						node.right = rightNode;
						_result.push(node);
					}
				}
			}
			map.set(`${i},${i + iterN - 1}`, _result);
		}
		iterN++;
	}
	return map.get(`${1},${n}`);
};

// @lc code=end

/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	// let head = (res = { val: null, next: null }),
	// 	last;
	// while (lists.some((list) => list !== null)) {
	// 	let min = Infinity;
	// 	for (let index = 0; index < lists.length; index++) {
	// 		let list;
	// 		if (!(list = lists[index])) {
	// 			continue;
	// 		}
	// 		if (list.val < min) {
	// 			min = list.val;
	// 			choose = index;
	// 		}
	// 	}
	// 	res.val = lists[choose].val;
	// 	res.next = { val: null, next: null };
	// 	last = res;
	// 	res = res.next;
	// 	lists[choose] = lists[choose].next;
	// }
	// last && (last.next = null);

	let pool = [];
	for (let list of lists) {
		while (list !== null) {
			pool.push(list.val);
			list = list.next;
		}
	}
	pool.sort((a, b) => a - b);
	if (!pool.length) {
		return null;
	}
	let res = (head = { val: null, next: null }),
		last = pool.pop();
	for (let e of pool) {
		res.val = e;
		res.next = { val: null, next: null };
		res = res.next;
	}
	res.val = last;
	return head;

	// return head.val !== null ? head : null;
};
// @lc code=end

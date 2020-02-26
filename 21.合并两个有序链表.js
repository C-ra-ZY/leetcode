/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1 || l1.val === null) {
		return l2;
	}
	if (!l2 || l2.val === null) {
		return l1;
	}
	let newList, head;
	if (l1.val < l2.val) {
		newList = head = { val: l1.val, next: null };
		l1 = l1.next;
	} else {
		newList = head = { val: l2.val, next: null };
		l2 = l2.next;
	}
	while (l1 && l2) {
		if (l1.val < l2.val) {
			newList.next = { val: l1.val, next: null };
			l1 = l1.next;
		} else {
			newList.next = { val: l2.val, next: null };
			l2 = l2.next;
		}
		newList = newList.next;
	}
	newList.next = l1 || l2;
	return head;
};
// @lc code=end

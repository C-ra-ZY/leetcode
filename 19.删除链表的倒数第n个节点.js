/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let iter = (pointer = head);
	let index = 0;
	while (iter.next) {
		if (++index > n) {
			pointer = pointer.next;
		}
		iter = iter.next;
	}
	if (index < n) {
		return head.next;
	}
	pointer.next = pointer.next.next;
	return head;
};
// @lc code=end

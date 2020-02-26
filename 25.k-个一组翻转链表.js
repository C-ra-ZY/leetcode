/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
	let index = 0,
		newList = null,
		newListTail = null,
		res = (former = { next: head });

	while (head) {
		if (!newList) {
			newList = newListTail = { val: head.val, next: null };
		} else {
			newList = { val: head.val, next: newList };
		}
		head = head.next;
		index++;
		if (index === k) {
			former.next = newList;
			newListTail.next = head;
			former = newListTail;
			newList = newListTail = null;
			index = 0;
		}
	}
	return res.next;
};
// @lc code=end

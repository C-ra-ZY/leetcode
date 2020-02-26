/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
	let one,
		two,
		index = 0,
		res = (former = { next: head });

	while (head) {
		if (index % 2 == 1) {
			two = head;
			let temp = two.next;
			two.next = one;
			one.next = temp;
			former.next = two;
			head = former = one;
		} else {
			one = head;
		}
		head = head.next;
		index++;
	}
	return res.next;
};
// swapPairs({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } });
// @lc code=end

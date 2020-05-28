/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
  console.log(JSON.stringify(head));
  let storedHead = head;
  if (!head) {
    return storedHead;
  }
  let index = 0;
  while (index < k) {
    if (head !== null && head.next !== null) {
      head = head.next;
      index++;
    } else {
      head = storedHead;
    }
  }
  console.log(JSON.stringify(head));
  console.log(JSON.stringify(storedHead));
  if (head !== null && head.next !== null) {
    let storedAppender = (iter = head.next);
    head.next = null;
    while (iter && iter.next) {
      if (iter.next === null) {
        break;
      } else {
        iter = iter.next;
      }
    }
    iter.next = storedHead;
    return storedAppender;
  } else {
    return storedHead;
  }
};
/* {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}} */

// @lc code=end

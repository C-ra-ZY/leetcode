/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let index = 1;
  let locationBeforeStart = (fakeHead = {next: head});
  while (head) {
    if (m !== index) {
      locationBeforeStart = head;
      head = head.next;
      index++;
    } else {
      break;
    }
  }
  let last = (startLocation = head);

  while (head) {
    if (n >= index) {
      let next = head.next;
      head.next = last;
      last = head;
      head = next;
      index++;
    } else {
      break;
    }
  }
  locationBeforeStart.next = last;
  startLocation.next = head;
  /*   console.log(cachedHead.val);
  console.log(cachedHead.next.val);
  console.log(cachedHead.next.next.val);
  console.log(cachedHead.next.next.next.val);
  console.log(cachedHead.next.next.next.next.val); */
  //   console.log(JSON.stringify(cachedHead));
  return fakeHead.next;
  /* console.log(JSON.stringify(head));
  if (head) {
    let last = (originHead = head);
    head = head.next;
    while (head) {
      let next = head.next;
      head.next = last;
      last = head;
      head = next;
    }
    originHead.next = null;
    console.log(JSON.stringify(last));
    return last;
  }
  return []; */
};
// @lc code=end
/* 
reverseBetween(
  {
    val: 1,
    next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}},
  },
  2,
  4
);
 */
/* reverseBetween(
  {
    val: 3,
    next: {val: 5, next: null},
  },
  1,
  2
); */

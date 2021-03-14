/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

const {last} = require("underscore");

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return head;
  }
  var cachedHead = head;
  let lastCopy;
  while (head) {
    // copiedHead.val = head.val;
    // copiedHead.next = new Node();
    if (!head.copy) {
      head.copy = new Node(head.val);
    }
    if (lastCopy) {
      lastCopy.next = head.copy;
    }
    lastCopy = head.copy;

    if (head.random) {
      if (!head.random.copy) {
        head.random.copy = new Node(head.random.val);
      }
      head.copy.random = head.random.copy;
    } else {
      head.copy.random = null;
    }
    head = head.next;
    // copiedHead = copiedHead.next;
  }
  /* var cachedCopiedHead = cachedHead.copy;
  head = cachedHead;
  while (head) {
    head.copy.next = head.next ? head.next.copy : null;
    if (head.random) {
      head.copy.random = head.random.copy;
    } else {
      head.copy.random = null;
    }
    head = head.next;
  } */
  return cachedHead.copy;
};
// @lc code=end

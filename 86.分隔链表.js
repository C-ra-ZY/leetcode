/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallerHead = (storedHead = {val: -Infinity, next: head}),
    formerHead;
  while (head) {
    if (head.val < x) {
      if (smallerHead && smallerHead.next !== head) {
        smallerHead.next = {val: head.val, next: smallerHead.next};
        smallerHead = smallerHead.next;
        if (head.next) {
          head.val = head.next.val;
          head.next = head.next.next;
        } else if (formerHead) {
          formerHead.next = null;
          break;
        }
      } else {
        smallerHead = head;
        head = head.next;
      }
    } else {
      formerHead = head;
      head = head.next;
    }
  }
  return storedHead.next;
};

var uniquePaths = function (m, n) {
  let long = Math.max(m, n),
    short = Math.min(m, n),
    lastRow = new Array(long).fill(0),
    currentRow = new Array(long);

  for (let i = 0; i < short; i++) {
    currentRow = new Array(long);
    currentRow[0] = 1;
    for (let j = 1; j < long; j++) {
      currentRow[j] = lastRow[j] + currentRow[j - 1];
    }
    lastRow = currentRow;
  }
  return currentRow.pop();
};

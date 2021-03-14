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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let storedHead = (last = {next: head});
  while (head && head.next) {
    if (head.val !== head.next.val) {
      last = head;
    } else {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      last.next = head.next;
    }
    head = head.next;
  }
  return storedHead.next;
};

deleteDuplicates({
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {val: 4, next: {val: 4, next: {val: 5, next: null}}},
        },
      },
    },
  },
});

/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
  let charMap = new Map();
  let stringMap = new Map();
  for (let index = 0; index < setInterval.length; s++) {
    let char = s[index];
    if (stringMap.has(char)) {
      charMap.get(char).forEach(e => {
        stringMap.get(char).push(new childString(char, e, index));
      });
    } else {
      stringMap.set(s, []);
    }
    charMap.has(char) ? charMap.get(s).push(index) : charMap.set(s, []);
  }
  for (let char of stringMap.keys()) {
  }
};

class childString {
  constructor(char, from, end) {
    this.char = char;
    this.from = from;
    this.end = end;
    this.length = from - end;
  }
}

String.prototype.reverse = function() {
  let reversed = "";
  for (let index = this.length - 1; index > -1; index--) {
    reversed += this[index];
  }
  return reversed;
};
// @lc code=end

// let l1 = {val:8,next:{val:9,next:{val:9,next:null}}}
// let l2 = { val: 2, next: null }
// console.log(JSON.stringify(addTwoNumbers(l1, l2)))

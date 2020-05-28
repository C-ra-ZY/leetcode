/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   let result = new Array(n).fill(undefined).map((e) => []),
//     vertical = true,
//     positive,
//     dis = n,
//     count = (offset = i = j = 0),
//     num = 1;
//   do {
//     let index,
//       step,
//       tempCounter = 0;
//     if (positive) {
//       index = offset;
//       step = 1;
//     } else {
//       index = n - offset - 1;
//       step = -1;
//     }
//     while (tempCounter < dis) {
//       if (vertical) {
//         j = index;
//       } else {
//         i = index;
//       }
//       result[i][j] = num++;
//       index += step;
//       tempCounter++;
//     }

//     vertical = !vertical;
//     if (++count % 2) {
//       dis--;
//       if (count % 4 === 1) {
//         offset++;
//       }
//     } else {
//       positive = !positive;
//     }
//   } while (dis);
//   return result;
// };
var generateMatrix = function (n) {
  let result = new Array(n).fill(undefined).map((e) => {
      return new Array();
    }),
    positive = (vertical = true),
    dis = n,
    count = (i = j = offset = 0),
    num = 1;
  do {
    let index = positive ? offset : n - offset - 1,
      step = positive ? 1 : -1,
      tempCounter = 0;
    while (tempCounter < dis) {
      if (vertical) {
        j = index;
      } else {
        i = index;
      }
      result[i][j] = num++;
      index += step;
      tempCounter++;
    }

    vertical = !vertical;
    if (++count % 2) {
      dis--;
      if (count % 4 === 1) {
        offset++;
      }
    } else {
      positive = !positive;
    }
  } while (dis);
  return result;
};
// @lc code=end

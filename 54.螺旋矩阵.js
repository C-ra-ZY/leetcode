/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} getItemFromArray(matrix,)
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let arr = [],
		i = (j = 0),
		vertical = false,
		getItemFromArray = (arr, x, y) => (arr[x] !== undefined ? arr[x][y] : undefined);
	while (true) {
		if (getItemFromArray(matrix, i, j) !== undefined) {
			arr.push(matrix[i][j]);
			matrix[i][j] = undefined;
		}
		if (!vertical) {
			if (getItemFromArray(matrix, i, j + 1) !== undefined) {
				j++;
			} else if (getItemFromArray(matrix, i, j - 1) !== undefined) {
				j--;
			} else if (getItemFromArray(matrix, i + 1, j) !== undefined) {
				i++;
				vertical = true;
			} else if (getItemFromArray(matrix, i - 1, j) !== undefined) {
				i--;
				vertical = true;
			} else {
				break;
			}
		} else {
			if (getItemFromArray(matrix, i + 1, j) !== undefined) {
				i++;
			} else if (getItemFromArray(matrix, i - 1, j) !== undefined) {
				i--;
			} else if (getItemFromArray(matrix, i, j + 1) !== undefined) {
				j++;
				vertical = false;
			} else if (getItemFromArray(matrix, i, j - 1) !== undefined) {
				j--;
				vertical = false;
			} else {
				break;
			}
		}
	}
	// console.log(JSON.stringify(arr));
	return arr;
};
// spiralOrder([
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]);
// @lc code=end

// let i = (j = 0),
// 	iDestination = getItemFromArray(matrix,)[0].length - 1,
// 	jDestination = getItemFromArray(matrix,)[0].length,
// 	iDirection = 1,
// 	jDirection = -1,
// 	res = [];
// while (true) {
// 	if (iDirection > 0 ? i < iDestination : i > iDestination) {
// 		i += iDirection;
// 		res.push(getItemFromArray(matrix,)[j][i]);
// 	} else if (i === iDestination) {
// 		jDirection *= -1;
// 		jDestination =jDirection<0?0:
// 	} else if (jDirection > 0 ? j < jDestination : j > jDestination) {
// 		j += jDirection;
// 		res.push(getItemFromArray(matrix,)[j][i]);
// 	} else if (j === jDestination) {
// 		iDirection *= -1;
// 		iDestination -= 1;
// 	}
// }

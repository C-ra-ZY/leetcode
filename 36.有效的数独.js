/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	let horizontal = {},
		vertical = {},
		reg = /\d/;
	let temp = new Set();
	for (let i = 0; i < board[0].length; i += 3) {
		for (let j = 0; j < board.length; j += 3) {
			let tempAddFact = 0;
			while (tempAddFact < 3) {
				let tempIndex = j + tempAddFact;
				if (!vertical[tempIndex]) {
					vertical[tempIndex] = true;
					for (let line of board) {
						if (line[tempIndex] !== ".") {
							if (temp.has(line[tempIndex])) {
								return false;
							} else {
								temp.add(line[tempIndex]);
							}
						}
					}
				}
				temp.clear();
				if (!horizontal[tempIndex]) {
					horizontal[tempIndex] = true;
					for (let digital of board[tempIndex]) {
						if (digital !== ".") {
							if (temp.has(digital)) {
								return false;
							} else {
								temp.add(digital);
							}
						}
					}
				}
				temp.clear();
				tempAddFact++;
			}
			let tempArr = [
				board[j][i],
				board[j][i + 1],
				board[j][i + 2],
				board[j + 1][i],
				board[j + 1][i + 1],
				board[j + 1][i + 2],
				board[j + 2][i],
				board[j + 2][i + 1],
				board[j + 2][i + 2]
			];
			for (let digital of tempArr) {
				if (digital !== ".") {
					if (temp.has(digital)) {
						return false;
					} else {
						temp.add(digital);
					}
				}
			}
			temp.clear();
		}
	}
	return true;
};
isValidSudoku([
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);
// @lc code=end

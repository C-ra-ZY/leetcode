/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
	function getFactors(i, j, newBoard) {
		let row = newBoard[j],
			col = [
				newBoard[0][i],
				newBoard[1][i],
				newBoard[2][i],
				newBoard[3][i],
				newBoard[4][i],
				newBoard[5][i],
				newBoard[6][i],
				newBoard[7][i],
				newBoard[8][i]
			],
			squareHorizontalBase = Math.floor(j / 3) * 3,
			squareVerticalBase = Math.floor(i / 3) * 3,
			square = [
				newBoard[squareHorizontalBase][squareVerticalBase],
				newBoard[squareHorizontalBase][squareVerticalBase + 1],
				newBoard[squareHorizontalBase][squareVerticalBase + 2],
				newBoard[squareHorizontalBase + 1][squareVerticalBase],
				newBoard[squareHorizontalBase + 1][squareVerticalBase + 1],
				newBoard[squareHorizontalBase + 1][squareVerticalBase + 2],
				newBoard[squareHorizontalBase + 2][squareVerticalBase],
				newBoard[squareHorizontalBase + 2][squareVerticalBase + 1],
				newBoard[squareHorizontalBase + 2][squareVerticalBase + 2]
			];
		return { col, row, square };
	}
	function calc(i, j, newBoard) {
		let { col, row, square } = getFactors(i, j, newBoard);

		if (!(judge(row) && judge(col) && judge(square))) {
			return;
		}
		if (i == 8 && j == 8) {
			return newBoard;
		}

		for (let nextJ = j; nextJ < 9; nextJ++) {
			let shouldBreak = false;
			for (let nextI = nextJ === j ? i + 1 : 0; nextI < 9; nextI++) {
				if (newBoard[nextJ][nextI] == ".") {
					i = nextI;
					j = nextJ;
					shouldBreak = true;
					break;
				}
				if (nextI === 8 && nextJ === 8) {
					return newBoard;
				}
			}
			if (shouldBreak) {
				break;
			}
		}
		let { col: nextCol, row: nextRow, square: nextSquare } = getFactors(i, j, newBoard),
			colSet = new Set(nextCol),
			rowSet = new Set(nextRow),
			squareSet = new Set(nextSquare),
			items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].filter((e) => {
				return !colSet.has(e) && !rowSet.has(e) && !squareSet.has(e);
			});
		for (let item of items) {
			newBoard[j][i] = item;
			let temp = calc(i, j, JSON.parse(JSON.stringify(newBoard)));
			if (temp) {
				for (let j = 0; j < 9; j++) {
					for (let i = 0; i < 9; i++) {
						board[j][i] = temp[j][i];
					}
				}
			}
		}
	}

	function judge(arr = []) {
		let set = new Set();
		let res = true;
		for (let item of arr.filter((e) => /\d/.test(e))) {
			if (set.has(item)) {
				res = false;
			}
			set.add(item);
		}
		return res;
	}
	if (board[0][0] == ".") {
		let newBoard = JSON.parse(JSON.stringify(board)),
			{ col: nextCol, row: nextRow, square: nextSquare } = getFactors(0, 0, newBoard),
			colSet = new Set(nextCol),
			rowSet = new Set(nextRow),
			squareSet = new Set(nextSquare),
			items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].filter((e) => {
				return !colSet.has(e) && !rowSet.has(e) && !squareSet.has(e);
			});
		for (let item of items) {
			newBoard[0][0] = item;
			let temp = calc(0, 0, JSON.parse(JSON.stringify(newBoard)));
			if (temp) {
				for (let j = 0; j < 9; j++) {
					for (let i = 0; i < 9; i++) {
						board[j][i] = temp[j][i];
					}
				}
			}
		}
	} else {
		calc(0, 0, board);
	}
};
// @lc code=end

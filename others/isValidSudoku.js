/**
 * 有效的数独
 
 规则：
 
 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 
 数字 1-9 在每一行只能出现一次。
 数字 1-9 在每一列只能出现一次。
 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 数独部分空格内已填入了数字，空白格用 '.' 表示。
 
 * 思路：通过一次遍历将所有数记录下来
 * 1. 用三个矩阵保留元素，并初始化为0
 * 2. 遍历元素，只需要判断数字类型的元素，并且将数字值 - 1，避免添加时数组越界
 * 3. 注意第n个九宫格的取值
 */
var isValidSudoku = function(board) {
	let
		rowArr = [],
		colArr = [],
		areaArr = []
	for (let i = 0; i < 9; i++) {
		rowArr.push(Array(9).fill(0))
		colArr.push(Array(9).fill(0))
		areaArr.push(Array(9).fill(0))
	}
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] != '.') {
				// 避免下面的判断组越界导致值为NaN
				board[i][j] = board[i][j] - 1
				if (rowArr[i][board[i][j]]++ || colArr[j][board[i][j]]++ || areaArr[(i / 3 >> 0) * 3 + (j / 3 >> 0)][board[i][j]]++) {
					return false
				}
			}
		}
	}
	return true
};

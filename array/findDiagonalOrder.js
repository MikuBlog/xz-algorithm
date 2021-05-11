/**
 * 对角线遍历
 
 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 
 输入:
 [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]
 
 输出:  [1,2,4,7,5,3,6,8,9]
 
 * 思路：直接模拟遍历即可
 * 
 * 注意点：区分上半部分与下半部分的对角线遍历
 * 1. 当遍历上半部分的时候，注意行、列的边界值
 * 2. 当遍历下半部分的时候，限制行、列的边界值，并且移动到下一个对角线位置需要注意 + 2处理
 */
var findDiagonalOrder = function(mat) {
	if (!mat.length) return []
	let
		col = 0,
		row = 0,
		colL = mat[0].length - 1,
		rowL = mat.length - 1,
		result = [],
		floor = 1
	while (result.length !== (colL + 1) * (rowL + 1)) {
		if (floor % 2) {
			while (col >= 0 && row >= 0 && col <= colL && row <= rowL) {
				result.push(mat[row--][col++])
			}
			if (col <= colL) {
				row = 0
			} else {
				col = colL
				row += 2
			}
		} else {
			while (col >= 0 && row >= 0 && col <= colL && row <= rowL) {
				result.push(mat[row++][col--])
			}
			if (row <= rowL) {
				col = 0
			} else {
				row = rowL
				col += 2
			}
		}
		floor += 1
	}
	return result
};

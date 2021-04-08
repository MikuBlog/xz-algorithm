/**
 * 顺时针打印矩阵
 示例 1：
 
 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[1,2,3,6,9,8,7,4,5]
 示例 2：
 
 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 
 思路：（四指针）
 1. 从左往右、从右上到右下、从右下到左下，从左下到左上进行遍历并去除重复值
 2. 矩阵内缩，左上++、右下--
 3. 如果矩阵最后遍历只剩横向，直接从左往右遍历剩下元素即可；如果矩阵最后遍历只剩竖向，直接从上往下遍历剩下元素即可
 */
var spiralOrder = function(matrix) {
	if (!matrix.length) return []
	let
		rowStart = 0,
		rowEnd = matrix.length - 1,
		colStart = 0,
		colEnd = matrix[0].length - 1,
		newArr = []
	while (rowStart <= rowEnd && colStart <= colEnd) {
		if (rowStart === rowEnd) {
			for (let i = colStart; i <= colEnd; i++) {
				newArr.push(matrix[rowStart][i])
			}
			return newArr
		} else if (colStart === colEnd) {
			for (let i = rowStart; i <= rowEnd; i++) {
				newArr.push(matrix[i][colStart])
			}
			return newArr
		} else {
			for (let i = colStart; i <= colEnd; i++) {
				newArr.push(matrix[rowStart][i])
			}
			for (let i = rowStart + 1; i <= rowEnd; i++) {
				newArr.push(matrix[i][colEnd])
			}
			for (let i = colEnd - 1; i >= colStart; i--) {
				newArr.push(matrix[rowEnd][i])
			}
			for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
				newArr.push(matrix[i][colStart])
			}
		}
		rowStart++
		rowEnd--
		colStart++
		colEnd--
	}
	return newArr
};

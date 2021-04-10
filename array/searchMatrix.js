/**
 * 搜索有序二维矩阵
 * 
 * 思路：双指针
 * 1. 从矩阵右上角找起，目标数比当前数大往下找，目标数比当前树小往左找
 */
var searchMatrix = function(matrix, target) {
	let
		colInd = matrix[0].length - 1,
		rowInd = 0
	while (colInd >= 0 && rowInd < matrix.length) {
		if (matrix[rowInd][colInd] === target) {
			return true
		} else if (matrix[rowInd][colInd] > target) {
			colInd--
		} else {
			rowInd++
		}
	}
	return false
};

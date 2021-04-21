/**
 * 螺旋数组
 
 输入：n = 3
 输出：[[1,2,3],[8,9,4],[7,6,5]]
 
 思路：跟二维数组螺旋遍历一样，反过来螺旋新增即可
 */
var generateMatrix = function(n) {
	let
		colStart = 0,
		colEnd = n - 1,
		rowStart = 0,
		rowEnd = n - 1,
		result = Array(n).fill(0).map(val => []),
		num = 1
	while (colStart <= colEnd && rowStart <= rowEnd) {
		for (let i = colStart; i <= colEnd; i++) {
			result[rowStart][i] = num++
		}
		for (let i = rowStart + 1; i <= rowEnd; i++) {
			result[i][colEnd] = num++
		}
		for (let i = colEnd - 1; i >= colStart; i--) {
			result[rowEnd][i] = num++
		}
		for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
			result[i][colStart] = num++
		}
		colStart++
		colEnd--
		rowStart++
		rowEnd--
	}
	return result
};

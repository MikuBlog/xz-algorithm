/**
 * 获取最小的前n位数
 * 
 * 思路：先排好序，然后截取前n位数组元素
 */
var getLeastNumbers = function(arr, k) {
	return arr.sort((a, b) => a - b).splice(0, k)
};

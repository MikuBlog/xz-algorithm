/**
 * 一个数的平方根
 * 
 * 思路：二分法
 */
var mySqrt = function(x) {
	let
		left = 0,
		right = x,
		mid = ~~((left + right) / 2)
	while (left <= right) {
		if (mid ** 2 === x) {
			return mid
		} else if (mid ** 2 > x) {
			right = mid - 1
		} else {
			left = mid + 1
		}
		mid = ~~((left + right) / 2)
	}
	return mid
};

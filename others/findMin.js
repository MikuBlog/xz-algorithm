/**
 * 旋转数组中查找最小值
 * 
 * 思路：双指针（二分法）
 * 1. 如果中间值大于左端值，左端值为mid + 1
 * 2. 如果中间值小于右端值，右端值为mid
 * 3. 最终返回左或右端索引即可
 */
var findMin = function(nums) {
	let
		left = 0,
		right = nums.length - 1
	while (left < right) {
		let mid = ~~((left + right) / 2)
		if (nums[mid] < nums[right]) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return nums[left]
};

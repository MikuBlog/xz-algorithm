/**
 * 二分查找
 
 思路：用有序数组从中间取数，然后与目标元素相比较，如果中间值小于目标数，则再右侧区域再取中间数比较，如果大于目标数则从左侧数取中间数
 */
var search = function(nums, target) {
	let
		mid = Math.floor(nums.length / 2),
		high = nums.length - 1,
		low = 0
	while (low <= high) {
		if (nums[mid] === target) {
			return mid
		} else if (nums[low] === target) {
			return low
		} else if (nums[high] === target) {
			return high
		} else if (nums[mid] > target) {
			high = mid - 1
		} else {
			low = mid + 1
		}
		mid = Math.floor((high + low) / 2)
	}
	return -1
};

var binarySearch = function(nums, low, high, target) {
	if (low > high) {
		return -1 
	}
	let mid = ~~((low + high) / 2)
	if (nums[mid] === target) {
		return mid
	} else if (nums[low] === target) {
		return low
	} else if (nums[high] === target) {
		return high
	} else if (nums[mid] > target) {
		return binarySearch(nums, low, mid - 1, target)
	} else {
		return binarySearch(nums, mid + 1, high, target)
	}
}

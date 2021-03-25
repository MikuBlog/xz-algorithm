/**
 * 查找唯一丢失的数字
 * 
 * 输入: [0,1,3]
 * 输出: 2
 * 
 * 思路：
 * 1. 由于数组元素是自增，所以可以采用二分法策略算法速度为O(logn)
 * 2. 数组序列中少了一个元素，如果索引mid === 数组第mid个元素的话，表示缺的数在右边，否则缺的数在左边
 * 3. 最终high会指向缺失元素的前一个，high + 1即可
 */
var missingNumber = function(nums) {
	let
		low = 0,
		high = nums.length - 1,
		mid = ~~((low + high) / 2)
	while (low <= high) {
		if (nums[mid] > mid) {
			high = mid - 1
		} else if (nums[mid] == mid) {
			low = mid + 1
		}
		mid = ~~((low + high) / 2)
	}
	return high + 1
};

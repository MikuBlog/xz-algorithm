/**
 * 搜索旋转数组中的值
 * 
 示例 1：
 
 输入：nums = [4,5,6,7,0,1,2], target = 0
 输出：4
 
 思路：二分查找
 1. 将二分查找划为两个区域，一个是左侧递增，一个是右侧递增，划分的方式通过中间值去划分
 2. 目标值如果在左侧区域则将右索引缩小范围
 3. 目标值如果在右侧区域则将左索引缩小范围
 4. 直到中间值为目标值即可
 */
var search = function(nums, target) {
	let
		left = 0,
		right = nums.length - 1
	while (left <= right) {
		let mid = ~~((left + right) / 2)
		if (nums[mid] === target) return mid
		if (nums[0] <= nums[mid]) {
			if (nums[0] <= target && target < nums[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if (nums[mid] < target && target <= nums[nums.length - 1]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return -1
};

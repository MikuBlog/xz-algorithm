/**
 * 在排序数组中查找元素的第一个和最后一个位置
 
 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 
 如果数组中不存在目标值 target，返回 [-1, -1]。
 
 进阶：
 
 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
  
 
 示例 1：
 
 输入：nums = [5,7,7,8,8,10], target = 8
 输出：[3,4]
 示例 2：
 
 输入：nums = [5,7,7,8,8,10], target = 6
 输出：[-1,-1]
 示例 3：
 
 输入：nums = [], target = 0
 输出：[-1,-1]
 
 * 思路：遍历O(n)，一前一后
 */
var searchRange = function(nums, target) {
	let startInd = -1,
		lastInd = -1
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			startInd = i
			break
		}
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === target) {
			lastInd = i
			break
		}
	}
	return [startInd, lastInd]
};

/**
 * 思路：排好序的数组可以利用二分法去进行检索查找
 * 
 * 注意：二分法的判断条件
 * 1. 如果要找到重复值的第一个，需要用到target <= nums[mid]
 * 2. 如果要找重复值的最后一个，需要用到nums[mid] <= target
 * 3. 如果只需要找到这个值，则使用target === nums[mid]即可
 * 4. 如果要找到比目标值大的第一个值，用target < nums[mid]
 * 5. 如果要找到比目标值小的最后一个值，用target > nums[mid]
 */
var searchRange = function(nums, target) {
	let
		startInd = findInd(nums, target, true),
		lastInd = findInd(nums, target, false) - 1
	if (startInd <= lastInd && lastInd < nums.length && nums[startInd] === target && nums[lastInd] === target) {
		return [startInd, lastInd]
	}
	return [-1, -1]
};

var findInd = function(nums, target, isLower) {
	let
		left = 0,
		right = nums.length - 1,
		mid = ~~((left + right) / 2),
		ind = nums.length
	while (left <= right) {
		if (target < nums[mid] || (isLower && target <= nums[mid])) {
			right = mid - 1
			ind = mid
		} else {
			left = mid + 1
		}
		mid = ~~((left + right) / 2)
	}
	return ind
}

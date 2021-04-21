/**
 * 三数之和
 
 示例 1：
 
 输入：nums = [-1,0,1,2,-1,-4]
 输出：[[-1,-1,2],[-1,0,1]]
 
 * 思路：双指针，将三数之和问题转为两数之和
 * 1. 第一遍循环确定一个数
 * 2. 剩下的数定义两个指针，相加等于第一个数的相反数则满足条件加入数组
 * 
 * 注意：
 * 1. 遍历元素重复元素需跳过
 * 2. 双指针重复元素也需要跳过
 */
var threeSum = function(nums) {
	nums.sort((a, b) => a - b)
	let result = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let
			left = i + 1,
			right = nums.length - 1,
			target = 0 - nums[i]
		while (left < right) {
			let total = nums[left] + nums[right]
			if (total === target) {
				result.push([nums[i], nums[left], nums[right]])
				left++
				right--
				while (left < right && nums[left - 1] === nums[left]) left++
				while (left < right && nums[right + 1] === nums[right]) right--
			} else if (total > target) {
				right--
			} else {
				left++
			}
		}
	}
	return result
};

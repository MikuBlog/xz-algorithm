// 两数之和
/**
 输入：nums = [2,7,11,15], target = 9
 输出：[0,1]
 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 
 思路：遍历
 */
var twoSum = function(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return []
};

/**
 思路 由于数组是递增的，那么可以使用二分法，双指针
 双指针：
 如果前后两个值之和大于目标值，那么右侧索引 --
 如果前后两个值之和小于目标值，那么左侧索引 ++
 */

var twoSum = function(nums, target) {
	let
		left = 0,
		right = nums.length - 1,
		sum = 0
	while (left < right) {
		sum = nums[left] + nums[right]
		if (sum > target) {
			right--
		} else if (sum < target) {
			left++
		} else {
			return [nums[left], nums[right]]
		}
	}
};
/**
 * 大数相加
 */
function twoSum(num1, num2) {
	let
		max = Math.max(num1.length, num2.length),
		result = Array(max).fill(0),
		plusInd = max - 1
	num1 = num1.padStart(max, '0')
	num2 = num2.padStart(max, '0')
	for (let i = max - 1; i >= 0; i--) {
		result[i] += +num1[plusInd] + +num2[plusInd]
		if (result[i] >= 10 && result[i - 1] !== undefined) {
			result[i] %= 10
			result[i - 1] += 1
		}
		plusInd--
	}
	return result.join("")
}

/**
 * 长度最小的子数组
 
 示例 1：
 
 输入：target = 7, nums = [2,3,1,2,4,3]
 输出：2
 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 
 思路：双指针（滑动窗口）
 1. 初始化左右指针为0
 2. 移动右指针，如果此时累计的总和大于目标值，停止遍历
 3. 移动左指针，记录此时的最大长度，并将累计值捡回去直到累计值小于目标值
 4. 最终获得的长度为目标值
 */
var minSubArrayLen = function(target, nums) {
	let
		left = 0,
		right = 0,
		sum = 0,
		minLen = Infinity
	while (right < nums.length) {
		while (right < nums.length && sum < target) {
			sum += nums[right]
			right += 1
		}
		while (left <= right && sum >= target) {
			minLen = Math.min(right - left, minLen)
			sum -= nums[left]
			left += 1
		}
	}
	return minLen === Infinity ?
		0 :
		minLen
};

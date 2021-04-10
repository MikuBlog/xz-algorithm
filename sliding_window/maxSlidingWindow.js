/**
 * 滑动窗口的最大值
 
 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 输出: [3,3,5,5,6,7] 
 解释: 
 
   滑动窗口的位置                最大值
 ---------------               -----
 [1  3  -1] -3  5  3  6  7       3
  1 [3  -1  -3] 5  3  6  7       3
  1  3 [-1  -3  5] 3  6  7       5
  1  3  -1 [-3  5  3] 6  7       5
  1  3  -1  -3 [5  3  6] 7       6
  1  3  -1  -3  5 [3  6  7]      7
 
 思路：简单的滑动窗口求窗口内最值即可实现
 */
var maxSlidingWindow = function(nums, k) {
	if (!nums.length) return []
	let
		left = 0,
		right = k - 1,
		result = []
	while (right < nums.length) {
		let max = -Infinity
		for (let i = left; i <= right; i++) {
			max = Math.max(nums[i], max)
		}
		result.push(max)
		left++
		right++
	}
	return result
};

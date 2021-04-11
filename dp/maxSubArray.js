/**
 * 连续子数组的最大和
 
 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 
 要求时间复杂度为O(n)。
 
  
 
 示例1:
 
 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 
 思路：动态规划（划分子问题，从第一个数开始构成数组，这个数组作为最优值传递给下一次使用）
 1. 第二个数与第二个数 + 前一个状态的最大值（保证相加值为连续值），可列出状态dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
 */
var maxSubArray = function(nums) {
	let dp = Array(nums.length).fill(0),
		max
	dp[0] = max = nums[0]
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
		max = Math.max(max, dp[i])
	}
	return max
};

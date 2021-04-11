/**
 * 最长递增子序列
 
 示例 1：
 
 输入：nums = [10,9,2,5,3,7,101,18]
 输出：4
 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 示例 2：
 
 输入：nums = [0,1,0,3,2,3]
 输出：4
 示例 3：
 
 输入：nums = [7,7,7,7,7,7,7]
 输出：1
 
 思路：动态规划
 如果当前的数比在前面比过的数要大，那么就将那个数对应的序列数 + 1作为当前数的最长子数长度
 */
var lengthOfLIS = function(nums) {
	if (!nums.length) return 0
	let dp = Array(nums.length).fill(0),
		max = 1
	dp[0] = 1
	for (let i = 1; i < nums.length; i++) {
		dp[i] = 1
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[j] + 1, dp[i])
			}
		}
		max = Math.max(dp[i], max)
	}
	return max
};

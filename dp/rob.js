/**
 * 打家劫舍
 
 示例 1：
 
 输入：[1,2,3,1]
 输出：4
 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
      偷窃到的最高金额 = 1 + 3 = 4 。
 示例 2：
 
 输入：[2,7,9,3,1]
 输出：12
 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 
 思路：动态规划
 1. 三种情况：只有一间房间，则直接偷完；只有两间房间，偷掉钱最多的房间；三间房间及其以上，偷第二间还是偷1和3间，可列出状态方程dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
 */
var rob = function(nums) {
	if (nums.length === 1) return nums[0]
	if (nums.length === 2) return Math.max(nums[0], nums[1])
	let dp = Array(nums.length).fill(0)
	let max = dp[1] = Math.max(dp[0] = nums[0], nums[1])
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
		max = Math.max(max, dp[i])
	}
	return max
};

/**
 * 凑零钱问题
 * 
 输入：coins = [1, 2, 5], amount = 11
 输出：3 
 解释：11 = 5 + 5 + 1
 
 思路：背包完全问题（动态规划）
 1. 将钱包拆为钱的数量 + 1份，用数组表示
 2. 每次比较的时候，基于上一次的钱能放下的硬币数量 + 1（使用到剪枝），从而得到全局最优解。（每次获取全局最优解都基于上一次的全局最优解获得）
 */
var coinChange = function(coins, amount) {
	if (!amount) return amount
	let dp = Array(amount + 1).fill(Infinity)
	dp[0] = 0
	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (i >= coins[j]) {
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
			}
		}
	}
	return dp[amount] === Infinity ?
		-1 :
		dp[amount]
};

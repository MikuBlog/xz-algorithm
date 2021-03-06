/**
 * 股票的最大利润
 
 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 
  
 
 示例 1:
 
 输入: [7,1,5,3,6,4]
 输出: 5
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 示例 2:
 
 输入: [7,6,4,3,1]
 输出: 0
 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 
 思路：动态规划，自底向上，备忘录
 1. 子问题：每天的股票价格
 2. 最优子结构：找到最低的股价的那一天与最高股价的那一天
 3. 步骤：通过遍历的方式找到最低股价，同时查找差价最大的那一天并记录下来。当下次找到更低的股价或更大的差价再记录下来
 */
var maxProfit = function(prices) {
	if (!prices.length) return 0
	let dp = Array(prices.length).fill(0)
	let min = prices[0]
	for (let i = 1; i < prices.length; i++) {
		min = Math.min(prices[i], min)
		dp[i] = Math.max(prices[i] - min, dp[i - 1])
	}
	return dp[dp.length - 1]
};

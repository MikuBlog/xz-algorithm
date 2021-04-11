/**
 * 最小路径和
 * 
 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 输出：7
 解释：因为路径 1→3→1→1→1 的总和最小。
 
 思路：动态规划，基于前一个与上一个数计算出当前步的最小值
 */
var minPathSum = function(grid) {
	let dp = Array(grid.length).fill(0).map(val => []),
		colStart = 0,
		rowStart = 0
	dp[0][0] = grid[0][0]
	while (colStart < grid[0].length && rowStart < grid.length) {
		for (let i = colStart + 1; i < grid[0].length; i++) {
			if (rowStart - 1 >= 0) {
				dp[rowStart][i] = Math.min(dp[rowStart][i - 1] + grid[rowStart][i], dp[rowStart - 1][i] + grid[rowStart][i])
			} else {
				dp[rowStart][i] = dp[rowStart][i - 1] + grid[rowStart][i]
			}
		}
		for (let i = rowStart + 1; i < grid.length; i++) {
			if (colStart - 1 >= 0) {
				dp[i][colStart] = Math.min(dp[i - 1][colStart] + grid[i][colStart], dp[i][colStart - 1] + grid[i][colStart])
			} else {
				dp[i][colStart] = dp[i - 1][colStart] + grid[i][colStart]
			}
		}
		colStart++
		rowStart++
		if (colStart < grid[0].length && rowStart < grid.length) {
			dp[rowStart][colStart] = Math.min(dp[rowStart - 1][colStart] + grid[rowStart][colStart], dp[rowStart][colStart -
				1
			] + grid[rowStart][colStart])
		}
	}
	return dp[dp.length - 1][dp[0].length - 1]
};

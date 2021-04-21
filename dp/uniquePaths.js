/**
 * 不同的路径
 
 输入：m = 3, n = 7
 输出：28
 
 思路：动态规划
 1. 从左上角出发，前往右下角，所以走法只能往右走或往下走相结合
 2. 那么可以列出状态方程 f[i - 1][j] + f[i][j - 1]，下一个格子的路径走法数量根据上一个格子的走法数量 + 左一个格子的走法数量
 3. 一开始默认第一行和第一列只有一种走法，所以进行初始化
 */
var uniquePaths = function(m, n) {
	let dp = new Array(m).fill(0).map(val => Array(n).fill(0))
	for (let i = 0; i < m; i++) {
		dp[i][0] = 1
	}
	for (let j = 0; j < n; j++) {
		dp[0][j] = 1
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp[m - 1][n - 1]
};

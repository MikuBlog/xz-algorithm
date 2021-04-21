/**
 * 不同的路径2
 
 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 输出：2
 解释：
 3x3 网格的正中间有一个障碍物。
 从左上角到右下角一共有 2 条不同的路径：
 1. 向右 -> 向右 -> 向下 -> 向下
 2. 向下 -> 向下 -> 向右 -> 向右
 
 思路：动态规划
 1. 相比于之前的不同路径题，这题多了n个障碍物，在原来的不同路径中作些修改
 2. 初始化的第一行和第一列的时候不能以默认1开头，而是排查这一行和这一列是否有障碍物，如果有障碍物，那么障碍物后的所有格子都不可达（因为只能向右、向下走），这里默认沿用前一个或上一个格子的路径长度
 3. 后续遍历的过程中如果格子有障碍物，则将dp当前位置置为0不可达
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	let
		rowLen = obstacleGrid.length,
		colLen = obstacleGrid[0].length,
		dp = Array(rowLen).fill(0).map(val => Array(colLen).fill(0))
	dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
	for (let i = 1; i < rowLen; i++) {
		if (obstacleGrid[i][0] === 1) dp[i][0] = 0
		else dp[i][0] = dp[i - 1][0]
	}
	for (let i = 1; i < colLen; i++) {
		if (obstacleGrid[0][i] === 1) dp[0][i] = 0
		else dp[0][i] = dp[0][i - 1]
	}
	for (let i = 1; i < rowLen; i++) {
		for (let j = 1; j < colLen; j++) {
			if (obstacleGrid[i][j] === 1) {
				dp[i][j] = 0
				continue
			}
			dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
		}
	}
	return dp[rowLen - 1][colLen - 1]
};

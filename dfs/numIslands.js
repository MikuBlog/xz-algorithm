/**
 * 岛屿的数量
 
 输入：grid = [
   ["1","1","1","1","0"],
   ["1","1","0","1","0"],
   ["1","1","0","0","0"],
   ["0","0","0","0","0"]
 ]
 输出：1
 
 * 思路：深度优先遍历（DFS）
 * 1. 从上到下遍历整个二维数组
 * 2. 如果发现有"1"，则开始遍历整个岛屿，遍历一个地方就将岛屿填平（剪枝）
 * 3. 最终得到岛屿的最终数量
 */
var numIslands = function(grid) {
	let num = 0

	function dfs(grid, i, j) {
		if (grid[i][j] === '0') return
		grid[i][j] = '0'
		if (i > 0) dfs(grid, i - 1, j)
		if (j > 0) dfs(grid, i, j - 1)
		if (i < grid.length - 1) dfs(grid, i + 1, j)
		if (j < grid[i].length - 1) dfs(grid, i, j + 1)
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				num += 1
				dfs(grid, i, j)
			}
		}
	}
	return num
};

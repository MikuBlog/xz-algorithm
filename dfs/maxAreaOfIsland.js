/**
 * 岛屿的最大面积
 
 示例 1:
 
 [[0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
	
 * 思路：深度优先遍历（DFS）
 * 1. 和岛屿的最大数量完全一致的做法，只是添加一个临时变量来保存一个岛屿的最大值
 */
var maxAreaOfIsland = function(grid) {
	let maxArea = 0,
		max = 0

	function dfs(grid, i, j) {
		if (!grid[i][j]) return
		grid[i][j] = 0
		max += 1
		if (i > 0) dfs(grid, i - 1, j)
		if (j > 0) dfs(grid, i, j - 1)
		if (i < grid.length - 1) dfs(grid, i + 1, j)
		if (j < grid[i].length - 1) dfs(grid, i, j + 1)
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				dfs(grid, i, j)
				maxArea = Math.max(maxArea, max)
				max = 0
			}
		}
	}
	return maxArea
};

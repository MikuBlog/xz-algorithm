/**
 * 二叉树中的最大路径和
 
 输入：root = [1,2,3]
 输出：6
 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 
 * 思路：以二叉树的直径为模板进行改造
 * 1. 不断的计算左子树与右子树的最大路径和
 * 2. 每次遍历都计算一次最大值sum，即根节点的值 + 左子树的值 + 右子树的值
 * 
 * 注意：左子树和右子树的最大路径如果为负数则舍弃掉这棵树的路径，进行剪枝处理
 */
var maxPathSum = function(root, type = "") {
	if (!root) return
	let sum = -Infinity

	function dfs(root) {
		if (!root) return 0
		let
			leftTotal = Math.max(dfs(root.left), 0),
			rightTotal = Math.max(dfs(root.right), 0)
		sum = Math.max(leftTotal + rightTotal + root.val, sum)
		return root.val + Math.max(leftTotal, rightTotal)
	}
	dfs(root)
	return sum
};

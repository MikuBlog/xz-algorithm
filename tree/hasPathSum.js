/**
 * 路径总和
 * 
 * 只要一条路径满足输入总数，即返回true，如果都不满足，返回false
 * 
 * 思路：dfs（前序遍历）
 * 注意点，如果没有左右节点注意提前剪枝，不然可能会出现把子节点当作叶子节点的情况
 */
var hasPathSum = function(root, targetSum) {
	if (!root) return false
	return match(root, targetSum, 0)
};

var match = function(root, targetSum, sum) {
	sum += root.val
	if (root.left && root.right) {
		return match(root.left, targetSum, sum) || match(root.right, targetSum, sum)
	} else if (root.left) {
		return match(root.left, targetSum, sum)
	} else if (root.right) {
		return match(root.right, targetSum, sum)
	} else if (targetSum === sum) {
		return true
	} else {
		return false
	}
}

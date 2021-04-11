/**
 * 求根节点到叶节点数字之和
 * 
 * 思路：路径问题，直接套模板
 */
var sumNumbers = function(root) {
	if (!root) return 0
	let sum = 0
	var dfs = function(root, path) {
		path += root.val
		if (root.left && root.right) {
			dfs(root.left, path)
			dfs(root.right, path)
		} else if (root.left) {
			dfs(root.left, path)
		} else if (root.right) {
			dfs(root.right, path)
		} else {
			sum += +path
			return
		}
	}
	dfs(root, "")
	return sum
};

/**
 * 二叉树中的所有路径
 * 
 示例:
 
 输入:
 
    1
  /   \
 2     3
  \
   5
 
 输出: ["1->2->5", "1->3"]
 
 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 
 思路：关于树路径的题全部如下模板
 */
var binaryTreePaths = function(root) {
	if (!root) return []
	let result = []
	dfs(root, result, "")
	return result
};

var dfs = function(root, result, path) {
	path += `${root.val}`
	if (root.left && root.right) {
		dfs(root.left, result, `${path}->`)
		dfs(root.right, result, `${path}->`)
	} else if (root.left) {
		dfs(root.left, result, `${path}->`)
	} else if (root.right) {
		dfs(root.right, result, `${path}->`)
	} else {
		return result.push(path)
	}
}

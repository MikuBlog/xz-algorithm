/**
 * 二叉树的后序遍历
 * 
 * 思路：按照左、右、中进行节点的遍历
 */
var postorderTraversal = function(root) {
	function deep(root, arr) {
		if (!root) return []
		deep(root.left, arr)
		deep(root.right, arr)
		arr.push(root.val)
		return arr
	}
	return deep(root, [])
};

/**
 * 多叉树的后序遍历
 */
var postorder = function(root) {
	if (!root) return []
	let result = []

	function dfs(root) {
		if (root.children.length) {
			for (let i = 0; i < root.children.length; i++) {
				dfs(root.children[i])
			}
		}
		result.push(root.val)
	}
	dfs(root)
	return result
};

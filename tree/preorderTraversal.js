/**
 * 二叉树的前序遍历
 * 
 * 思路：遍历中、左、右节点
 */
var preorderTraversal = function(root) {
	function deep(root, arr) {
		if (!root) return []
		root.val && arr.push(root.val)
		deep(root.left, arr)
		deep(root.right, arr)
		return arr
	}
	return deep(root, [])
};

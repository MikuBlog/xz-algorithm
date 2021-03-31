/**
 * 二叉树的中序遍历
 * 
 * 思路：按照左、中、右节点进行遍历
 */
var inorderTraversal = function(root) {
	function deep(root, arr) {
		if (!root) return []
		deep(root.left, arr)
		arr.push(root.val)
		deep(root.right, arr)
		return arr
	}
	return deep(root, [])
};

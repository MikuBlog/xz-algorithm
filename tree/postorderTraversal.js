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

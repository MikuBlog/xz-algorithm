/**
 * 翻转二叉树
 * 
 * 思路：简单调换，深度遍历即可
 */
var invertTree = function(root) {
	if (!root) return null
	let temp = root.left
	root.left = root.right
	root.right = temp
	invertTree(root.left)
	invertTree(root.right)
	return root
};

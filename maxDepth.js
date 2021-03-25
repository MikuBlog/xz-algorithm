/**
 * 二叉树的最大深度
 
     3
    / \
   9  20
     /  \
    15   7
 */
var maxDepth = function(root) {
	if (!root) {
		return 0
	}
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

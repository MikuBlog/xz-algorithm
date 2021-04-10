/**
 * 镜像树
 *      4
	   /   \
	  2     7
	 / \   / \
	1   3 6   9
	镜像输出：

	     4
	   /   \
	  7     2
	 / \   / \
	9   6 3   1
	
	思路：使用简单的递归遍历交换即可
 */
var mirrorTree = function(root) {
	if (!root) {
		return null
	}
	let temp = root.left
	root.left = root.right
	root.right = temp
	mirrorTree(root.left)
	mirrorTree(root.right)
	return root
};

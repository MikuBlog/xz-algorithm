/**
 * 二叉树的最小深度
 
 输入：root = [3,9,20,null,null,15,7]
 输出：2
 示例 2：
 
 输入：root = [2,null,3,null,4,null,5,null,6]
 输出：5
 
 * 思路：与求最大深度相反
 * 注意：如果左或右节点不存在的话，无需求深度
 */
var minDepth = function(root) {
	if (!root) return 0
	if (root.left && root.right) {
		return Math.min(minDepth(root.left), minDepth(root.right)) + 1
	} else if (root.left) {
		return minDepth(root.left) + 1
	} else if (root.right) {
		return minDepth(root.right) + 1
	} else {
		return 1
	}
};

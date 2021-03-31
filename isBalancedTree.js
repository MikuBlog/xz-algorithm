/**
 * 平衡二叉树
 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 
  
 
 示例 1:
 
 给定二叉树 [3,9,20,null,null,15,7]
 
     3
    / \
   9  20
     /  \
    15   7
 返回 true 。
 
 示例 2:
 
 给定二叉树 [1,2,2,3,3,null,null,4,4]
 
        1
       / \
      2   2
     / \
    3   3
   / \
  4   4
 返回 false 。
 
 思路：
 1. 即求左子树和右子树的高度，通过递归找到所有左子树和右子树的高度差
 2. 高度差用二叉树的深度方法即可实现
 3. 如果左子树和右子树的高度满足1及其以内，则继续遍历，否则返回false
 4. 如果所有都满足（即节点为空），则返回true
 */
var isBalanced = function(root) {
	if (!root) return true
	if (Math.abs(deep(root.left) - deep(root.right)) <= 1) {
		return isBalanced(root.left) && isBalanced(root.right)
	} else {
		return false
	}
};

var deep = function(root) {
	if (!root) return 0
	return Math.max(deep(root.left), deep(root.right)) + 1
}

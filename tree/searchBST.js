/**
 * 二叉搜索树中的搜索
 
 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 
 例如，
 
 给定二叉搜索树:
 
         4
        / \
       2   7
      / \
     1   3
 
 和值: 2
 你应该返回如下子树:
 
       2     
      / \   
     1   3
 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
 
 * 思路：利用二叉搜索树的性质，节点值比目标值小找右侧，比目标值大找左侧
 */
var searchBST = function(root, val) {
	if (!root) return null
	if (root.val === val) {
		return root
	} else if (root.val < val) {
		return searchBST(root.right, val)
	} else {
		return searchBST(root.left, val)
	}
};

/**
 * 二叉树的直径
 
 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 
  
 
 示例 :
 给定二叉树
 
           1
          / \
         2   3
        / \     
       4   5    
 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 
 思路：和二叉树的深度有异曲同工之妙，目标是将左子树的深度 + 右子树的深度作为直径；不过这里由于可以不过根节点，所以需要用一个max值来保存左子树 + 右子树的深度
 */
var diameterOfBinaryTree = function(root) {
	if (!root) return 0
	let max = 0
	var deep = function(root) {
		if (!root) return 0
		let
			l = deep(root.left),
			r = deep(root.right)
		max = Math.max(max, l + r)
		return Math.max(l, r) + 1
	}
	deep(root)
	return max
};

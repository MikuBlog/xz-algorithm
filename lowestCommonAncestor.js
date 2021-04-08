/**
 * 最近公共祖先
 
 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 
 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 
 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 
 
 
  
 
 示例 1:
 
 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 输出: 6 
 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 示例 2:
 
 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 输出: 2
 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 
 思路：
 1. 两个节点之间即为公共祖先，所以只需要判断两个节点是否分别大于或小于根节点，如果是的话则为公共祖先
 2. 如果两个节点都小于或大于根节点，那么则在左子树或右子树中寻找公共节点
 3. 如果其中一个节点与根节点的值相同，则直接返回根节点
 */
var lowestCommonAncestor = function(root, p, q) {
	if (!root) return null
	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q)
	} else if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q)
	} else {
		return root
	}
};

/**
 * 普通二叉树的最近公共节点
 * 
 * 思路：
 * 1. 从左右子树判断两个节点是否存在，如果左子树和右子树分别找到节点的话，那么根节点就是公共节点
 * 2. 递归分解，继续往左子树和右子树递归查找，直到将元素找到为止
 */
var lowestCommonAncestor = function(root, p, q) {
	if (!root) return null
	if (root === p || root === q) {
		return root
	}
	let
		isLeftRoot = lowestCommonAncestor(root.left, p, q),
		isRightRoot = lowestCommonAncestor(root.right, p, q)
	if (isLeftRoot && isRightRoot) {
		return root
	} else if (isLeftRoot) {
		return isLeftRoot
	} else if (isRightRoot) {
		return isRightRoot
	} else {
		return null
	}
};

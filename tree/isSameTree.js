/**
 * 判断是否是一棵相同的树
 * 
 * 思路：左右两节点进行比对即可
 */
var isSameTree = function(p, q) {
	if (!p && !q) return true
	if (!p || !q) return false
	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
	} else {
		return false
	}
};

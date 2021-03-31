/**
 * 树的子结构
 * 例如:
		给定的树 A:

		     3
		    / \
		   4   5
		  / \
		 1   2
		给定的树 B：

		   4 
		  /
		 1
		返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

		示例 1：

		输入：A = [1,2,3], B = [3,1]
		输出：false
		示例 2：

		输入：A = [3,4,5,1,2], B = [4,1]
		输出：true
	
	思路：
	1. 通过前序遍历来判断节点值是否相同
	2. 如果节点值相同，通过前序遍历的方式判断两个节点是否相等
	3. 如果节点值不相等，则继续遍历左右子树
 */
var isSubStructure = function(A, B) {
	if (!A || !B) {
		return false
	}
	if (A.val === B.val) {
		return match(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
	} else {
		return isSubStructure(A.left, B) || isSubStructure(A.right, B)
	}
};

var match = function(A, B) {
	if (!A && B) {
		return false
	}
	if ((A && !B) || (!A && !B)) {
		return true
	}
	return A.val === B.val && match(A.left, B.left) && match(A.right, B.right)
}

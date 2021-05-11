/**
 * 二叉搜索树中第k小的元素
 
 输入：root = [3,1,4,null,2], k = 1
 输出：1
	
 * 思路：中序遍历（DFS）
 * 1. 使用中序遍历，每遍历一次k的次数减一即可达第k个小的元素
 */
var kthSmallest = function(root, k) {
	let val = undefined

	function dfs(root) {
		if (!root || k <= 0) return
		dfs(root.left)
		k -= 1
		if (k === 0) return val = root.val
		dfs(root.right)
	}
	dfs(root)
	return val
};

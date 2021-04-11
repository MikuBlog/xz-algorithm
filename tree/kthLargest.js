/**
 * 二叉树的第k大节点
 * 
 * 思路：层次遍历（bfs）
 */
var kthLargest = function(root, k) {
	if (!root) {
		return null
	}
	let floor = [root],
		cache = [root.val]
	while (floor.length) {
		let newArr = []
		for (let i = 0; i < floor.length; i++) {
			floor[i].left && (newArr.push(floor[i].left), cache.push(floor[i].left.val))
			floor[i].right && (newArr.push(floor[i].right), cache.push(floor[i].right.val))
		}
		floor = newArr
	}
	return cache.sort((a, b) => b - a)[k - 1]
};

/**
 * 条件：二叉搜索树(排好序的树结构)
 * 思路：二叉搜索树通过反向中序遍历即为排好序的树，然后再取值
 */

var kthLargest = function(root, k) {
	if (!root) return null
	let result
	findK(root)

	function findK(root) {
		if (!root || k <= 0) return
		findK(root.right)
		k -= 1
		k === 0 && (result = root.val)
		findK(root.left)
	}
	return result
};

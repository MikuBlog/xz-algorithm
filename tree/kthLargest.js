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
 * 思路：二叉搜索树通过终须遍历即为排好序的树，然后再取值
 */

var sortNode = function(root) {
	if (!root) {
		return []
	}
	let newArr = []
	root.left && (newArr = newArr.concat(sortNode(root.left)))
	newArr.push(root.val)
	root.right && (newArr = newArr.concat(sortNode(root.right)))
	return newArr
}
var kthLargest = function(root, k) {
	if (!root) {
		return null
	}
	let arr = sortNode(root)
	return arr[arr.length - k]
};

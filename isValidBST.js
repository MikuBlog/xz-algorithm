/**
 * 判断是否为二叉搜索树
 * 
 * 思路：(最容易理解)
 * 1. 先中序遍历获取到数组值
 * 2. 再遍历数组判断
 */
var isValidBST = function(root) {
	if (!root) return false

	function inorder(root, arr) {
		if (!root) return
		inorder(root.left, arr)
		arr.push(root.val)
		inorder(root.right, arr)
		return arr
	}
	let arr = inorder(root, [])
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) return true
		if (arr[i] >= arr[i + 1]) return false
	}
};

/**
 * 思路：通过一个变量保存当前最小值
 * 1. 通过中序遍历，先获取到最小值
 * 2. 通过最小值与下一个节点比较，如果下一个节点大于最小值，则更新最小值
 * 3. 如果下一个节点小于最小值表示不是一颗二叉搜索树
 */
var isValidBST = function(root) {

	var pre = -Infinity;

	function check(root) {
		if (!root) return true
		if (check(root.left)) {
			if (pre < root.val) {
				pre = root.val
				return check(root.right)
			}
		}
		return false
	}

	return check(root)
};

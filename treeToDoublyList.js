/**
 * 二叉搜索树与双向链表
 * 
 * 题目：将二叉搜索树转为双向链表
 * 
 * 思路：先通过前序遍历转为数组，再通过数组转为双向链表
 */
var treeToDoublyList = function(root) {
	if (!root) return null
	let arr = getNodeList(root, [])
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			arr[i].right = arr[0]
			arr[0].left = arr[i]
			return arr[0]
		}
		arr[i].right = arr[i + 1]
		arr[i + 1].left = arr[i]
	}
};

var getNodeList = function(root, arr) {
	if (!root) return
	getNodeList(root.left, arr)
	arr.push(root)
	getNodeList(root.right, arr)
	return arr
}

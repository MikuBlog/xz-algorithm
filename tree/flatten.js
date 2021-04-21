/**
 * 二叉树展开为链表
 
 输入：root = [1,2,5,3,4,null,6]
 输出：[1,null,2,null,3,null,4,null,5,null,6]
 
 * 思路：展开的链表为二叉树先序遍历的结果，那么可以先用先序遍历获取到列表，再将列表转化为链表
 */
var flatten = function(root) {
	if (!root) return null
	let nodeList = []

	function buildList(root) {
		if (!root) return
		nodeList.push(root)
		buildList(root.left)
		buildList(root.right)
	}
	buildList(root)
	nodeList[0].left = null
	for (let i = 1; i < nodeList.length; i++) {
		nodeList[i - 1].right = nodeList[i]
		nodeList[i].left = null
	}
	return nodeList[0]
};

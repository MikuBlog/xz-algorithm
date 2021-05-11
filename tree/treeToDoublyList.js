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

/**
 * 思路：直接通过中序遍历来完成链表的转换
 * 1. 声明两个全局变量，分别存放链表的头节点与前置节点，初始化为null
 * 2. 进行中序遍历
 * 2.1 如果遍历到末尾前置节点依旧为空，则左节点全部遍历完毕，获取到链表的头结点
 * 2.2 将当前节点的左指针指向前置节点，将前置节点的右指针指向当前节点
 * 2.3 前置节点变为当前节点，然后继续遍历
 * 3. 中序遍历结束后，前置节点势必指向二叉树的右子树的最右节点，也就是链表的尾结点
 * 4. 将链表的尾结点指向头结点，头结点指向尾结点，最终完成二叉搜索树与双向链表的转换
 */
var treeToDoublyList = function(root) {
	if (!root) return null
	let
		head = null,
		pre = null

	function dfs(cur) {
		if (!cur) return
		dfs(cur.left)
		if (pre) pre.right = cur
		else head = cur
		cur.left = pre
		pre = cur
		dfs(cur.right)
	}
	dfs(root)
	head.left = pre
	pre.right = head
	return head
};

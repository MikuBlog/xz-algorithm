/**
 将有序链表转为二叉树
 
 示例:
 
 给定的有序链表： [-10, -3, 0, 5, 9],
 
 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 
       0
      / \
    -3   9
    /   /
  -10  5
 
 思路：分治思想
 1. 先将节点转化为数组
 2. 取数组中点作为二叉树的根节点
 3. 将中点的左侧与右侧继续完成构建
 */
var sortedListToBST = function(head) {
	if (!head) return null
	let nodeList = []
	while (head) {
		nodeList.push(head)
		head = head.next
	}

	function buildTree(left, right) {
		if (left > right) return null
		let mid = (left + right) >>> 1
		let root = new TreeNode(nodeList[mid].val)
		root.left = buildTree(left, mid - 1)
		root.right = buildTree(mid + 1, right)
		return root
	}
	return buildTree(0, nodeList.length - 1)
};

/**
 * 思路：双指针（快慢指针）
 * 1. 通过快慢指针找中间节点
 * 2. 找到中间节点后创建节点，并递归继续进行中间节点的查找，构建左右子树
 * 
 * 注意：
 * 1. 前置节点preNode可能为null（仅剩头结点的时候），所以当只剩头结点的时候，创建头结点并返回即可
 */
var sortedListToBST = function(head) {
	if (!head) return null
	let
		snow = head,
		fast = head,
		preNode = null
	while (fast && fast.next) {
		preNode = snow
		snow = snow.next
		fast = fast.next.next
	}
	let root = new TreeNode(snow.val)
	if (preNode) {
		preNode.next = null
		root.left = sortedListToBST(head)
	}
	root.right = sortedListToBST(snow.next)
	return root
};

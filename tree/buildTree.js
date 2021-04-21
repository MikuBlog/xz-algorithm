/**
 * 构建二叉树
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 思路：前序遍历的第一个节点就是根节点，通过根节点，找到中序遍历的左子树与右子树，然后通过递归的形式完成树的构建
 */
var buildTree = function(preorder, inorder) {
	if (!preorder.length) {
		return null
	}
	let
		root = new TreeNode(preorder[0]),
		iIndex = inorder.indexOf(preorder[0]),
		inorderLeftTree = inorder.slice(0, iIndex),
		inorderRightTree = inorder.slice(iIndex + 1),
		preorderLeftTree = findArr(preorder, inorderLeftTree),
		preorderRightTree = findArr(preorder, inorderRightTree)
	root.left = buildTree(preorderLeftTree, inorderLeftTree)
	root.right = buildTree(preorderRightTree, inorderRightTree)
	return root
};

var findArr = function(oArr, newArr) {
	let arr = []
	for (let i = 0; i < oArr.length; i++) {
		newArr.includes(oArr[i]) && arr.push(oArr[i])
	}
	return arr
}

/**
 * 思路：
 * 1. 构建树仅用前序遍历方式构建
 * 2. 前序队中的每一个节点都可以视为根节点，所以采用index的方式进行
 * 3. 使用left与right来限制遍历的次数，限制左子树和右子树的范围
 */
var buildTree = function(preorder, inorder) {
	let
		preInd = 0,
		cache = new Map()
	for (let i = 0; i < inorder.length; i++) {
		cache.set(inorder[i], i)
	}

	function build(left, right) {
		if (left > right) {
			return null
		}
		let
			num = preorder[preInd++],
			inoInd = cache.get(num),
			root = new TreeNode(num)
		root.left = build(left, inoInd - 1)
		root.right = build(inoInd + 1, right)
		return root
	}
	return build(0, inorder.length - 1)
};

/**
 * 通过中序 + 后序构建树
 */
var buildTree = function(inorder, postorder) {
	let map = new Map()
	for (let i = 0; i < inorder.length; i++) {
		map.set(inorder[i], i)
	}

	function build(left, right, postStart, postEnd) {
		if (left > right) {
			return null
		}
		let
			num = postorder[postEnd],
			inorderInd = map.get(num),
			root = new TreeNode(num)
		root.left = build(left, inorderInd - 1, postStart, postStart + inorderInd - 1 - left)
		root.right = build(inorderInd + 1, right, postStart + inorderInd - left, postEnd - 1)
		return root
	}
	return build(0, inorder.length - 1, 0, postorder.length - 1)
};

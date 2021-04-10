/**
 * 二叉搜索树的后序遍历序列
 参考以下这颗二叉搜索树：

			 5
			/ \
		 2   6
		/ \
	 1   3
	示例 1：

	输入: [1,6,3,2,5]
	输出: false
	示例 2：

	输入: [1,3,2,6,5]
	输出: true

	思路：
	1. 二叉搜索树的后序遍历结果，根节点一定在最后
	2. 以最后一个节点为依据，找到第一个比最后一个节点大的数，该数的左侧为左子树，该数及其右侧为右子树
	3. 左子树的所有数比最后一个节点要小，右子树的所有数比最后一个节点要大，如果其中一个不满足都返回为false
	4. 将比较后的结果继续递归，直到数组为空的时候返回true，否则中途比较不对则返回false
 */
var verifyPostorder = function(postorder) {
	if (!postorder.length) {
		return true
	}
	let
		mid = postorder[postorder.length - 1],
		ind = postorder.findIndex(val => val > mid),
		leftArr = postorder.slice(0, ind),
		rightArr = postorder.slice(ind, postorder.length - 1)
	if (Math.max(...leftArr) > mid) {
		return false
	} else if (Math.min(...rightArr) < mid) {
		return false
	}
	return verifyPostorder(leftArr) && verifyPostorder(rightArr)
};

var verifyPostorder = function(postorder) {
	if (!postorder.length) {
		return true
	}
	let mid = postorder[postorder.length - 1]
	for (var i = 0; i < postorder.length; i++) {
		if (postorder[i] > mid) break
		if (i === postorder.length - 1) break
	}
	for (var j = i; j < postorder.length; j++) {
		if (postorder[j] < mid) return false
	}
	return verifyPostorder(postorder.filter((val, ind) => ind < i)) && verifyPostorder(postorder.filter((val, ind) =>
		ind >= i && ind < postorder.length - 1))
};

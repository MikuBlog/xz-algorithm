/**
 * 最大二叉树
 
 输入：nums = [3,2,1,6,0,5]
 输出：[6,3,5,null,2,0,null,null,1]
 解释：递归调用如下所示：
 - [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
     - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
         - 空数组，无子节点。
         - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
             - 空数组，无子节点。
             - 只有一个元素，所以子节点是一个值为 1 的节点。
     - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
         - 只有一个元素，所以子节点是一个值为 0 的节点。
         - 空数组，无子节点。
 
 * 思路：分治
 * 1. 先找到第一次的最大值
 * 2. 根据最大值构建节点
 * 3. 将最大值的左侧数组与右侧数组进行递归
 */
var constructMaximumBinaryTree = function(nums) {
	return buildTree(nums, 0, nums.length - 1)
};

var buildTree = function(nums, left, right) {
	if (left > right) return null
	let
		maxInd = findMax(nums, left, right),
		root = new TreeNode(nums[maxInd])
	root.left = buildTree(nums, left, maxInd - 1)
	root.right = buildTree(nums, maxInd + 1, right)
	return root
}

var findMax = function(nums, left, right) {
	let maxInd = -1,
		maxVal = -Infinity
	for (let i = left; i <= right; i++) {
		if (maxVal < nums[i]) {
			maxVal = nums[i]
			maxInd = i
		}
	}
	return maxInd
}

/**
 * 二叉树中和为某一值的路径
 
 示例:
 给定如下二叉树，以及目标和 target = 22，
 
               5
              / \
             4   8
            /   / \
           11  13  4
          /  \    / \
         7    2  5   1
 返回:
 
 [
    [5,4,11,2],
    [5,8,4,5]
 ]
 
 思路：（DFS）前序遍历即可
 注意点：每递归一次将元素出列一次，保证sum的值与cache的值同步
 */
var pathSum = function(root, targetSum) {
	if (!root) return []
	let result = []
	getPath(root, targetSum, 0, [], result)
	return result
};

var getPath = function(root, targetSum, sum, cache, result) {
	sum += root.val
	cache.push(root.val)
	if (root.left && root.right) {
		getPath(root.left, targetSum, sum, cache, result)
		getPath(root.right, targetSum, sum, cache, result)
	} else if (root.left) {
		getPath(root.left, targetSum, sum, cache, result)
	} else if (root.right) {
		getPath(root.right, targetSum, sum, cache, result)
	} else if (targetSum === sum) {
		result.push([...cache])
	}
	cache.pop()
}

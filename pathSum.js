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
var pathSum = function(root, target) {
	if (!root) return []
	let result = []
	dfs(root, target, result, 0, [])
	return result
};

var dfs = function(root, target, result, sum, cache) {
	sum += root.val
	cache.push(root.val)
	root.left && dfs(root.left, target, result, sum, cache)
	root.right && dfs(root.right, target, result, sum, cache)
	if (sum === target && !root.left && !root.right) {
		result.push([...cache])
	}
	cache.pop()
}

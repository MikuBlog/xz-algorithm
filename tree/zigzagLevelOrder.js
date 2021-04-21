/**
 * 二叉树的锯齿层序遍历
 
 例如：
 给定二叉树 [3,9,20,null,null,15,7],
 
     3
    / \
   9  20
     /  \
    15   7
 返回锯齿形层序遍历如下：
 
 [
   [3],
   [20,9],
   [15,7]
 ]
 
 思路：层序遍历（BFS），只需要在添加数字的时候注意一下就好
 
 */
var zigzagLevelOrder = function(root) {
	if (!root) return []
	let arr = [root],
		result = [],
		floor = 1
	while (arr.length) {
		let len = arr.length
		if (len) {
			result.push([])
			if (floor % 2) {
				for (let i = 0; i < len; i++) {
					result[result.length - 1].push(arr[i].val)
				}
			} else {
				for (let i = len - 1; i >= 0; i--) {
					result[result.length - 1].push(arr[i].val)
				}
			}
		}
		for (let i = 0; i < len; i++) {
			let node = arr.shift()
			node.left && arr.push(node.left)
			node.right && arr.push(node.right)
		}
		floor++
	}
	return result
};

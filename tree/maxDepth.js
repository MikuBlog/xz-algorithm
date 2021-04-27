/**
 * 二叉树的最大深度
 
     3
    / \
   9  20
     /  \
    15   7
 */
var maxDepth = function(root) {
	if (!root) {
		return 0
	}
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

/**
 * 对象的最大深度
 */
function maxDepth(obj) {
	let arr = []
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			arr.push(maxDepth(obj[key]) + 1)
		}
	}
	if (!arr.length) return 0
	return Math.max(...arr)
}


/**
 * 多叉树的最大深度
 */
var maxDepth = function(root) {
	if (!root) return 0
	if (root.children.length) {
		let arr = []
		for (let i = 0; i < root.children.length; i++) {
			arr.push(maxDepth(root.children[i]) + 1)
		}
		return Math.max(...arr)
	}
	return 1
};

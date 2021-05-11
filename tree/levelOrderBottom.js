/**
 * 二叉树的层序遍历
 
 条件：自低向上层序遍历
 
 * 思路：依旧是层序遍历的思想，只是添加元素的时候不再是以追加到队列尾部的形式，而是追加到队头的形式完成
 */
var levelOrderBottom = function(root) {
	if (!root) return []
	let arr = [root],
		result = []
	while (arr.length) {
		let newArr = []
		result.unshift([])
		for (let i = 0; i < arr.length; i++) {
			result[0].push(arr[i].val)
			arr[i].left && (newArr.push(arr[i].left))
			arr[i].right && (newArr.push(arr[i].right))
		}
		arr = newArr
	}
	return result
};

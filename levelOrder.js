/**
 * 从上到下输出树
 * 
 * 思路：层次遍历（图的bfs思路）
 */
var levelOrder = function(root) {
	if (!root) {
		return []
	}
	let floor = [root],
		arr = [
			[root.val]
		]
	while (floor.length) {
		let cache = [],
			nums = []
		for (let i = 0; i < floor.length; i++) {
			floor[i].left && (cache.push(floor[i].left), nums.push(floor[i].left.val))
			floor[i].right && (cache.push(floor[i].right), nums.push(floor[i].right.val))
		}
		floor = cache
		floor.length && arr.push(nums)
	}
	return arr
};

/**
 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 
  
 
 例如:
 给定二叉树: [3,9,20,null,null,15,7],
 
     3
    / \
   9  20
     /  \
    15   7
 返回其层次遍历结果：
 
 [
   [3],
   [20,9],
   [15,7]
 ]
 
 思路：层序遍历
 */
var levelOrder = function(root) {
	if (!root) return []
	let arr = [root],
		newArr = [
			[root.val]
		],
		floor = 1
	while (arr.length) {
		let cacheArr = []
		for (let i = 0; i < arr.length; i++) {
			arr[i].left && cacheArr.push(arr[i].left)
			arr[i].right && cacheArr.push(arr[i].right)
		}
		if (cacheArr.length) {
			let len = newArr.push([])
			if (floor % 2) {
				for (let j = cacheArr.length - 1; j >= 0; j--) {
					newArr[len - 1].push(cacheArr[j].val)
				}
			} else {
				for (let j = 0; j < cacheArr.length; j++) {
					newArr[len - 1].push(cacheArr[j].val)
				}
			}
		}
		arr = cacheArr
		floor += 1
	}
	return newArr
};

/**
 * 二叉树的右视图
 
 输入: [1,2,3,null,5,null,4]
 输出: [1, 3, 4]
 解释:
 
    1            <---
  /   \
 2     3         <---
  \     \
   5     4       <---

 * 思路：广度优先搜索（bfs）
 * 每次取广度优先搜索队列中的最后一个即可
 */
var rightSideView = function(root) {
	if (!root) return []
	let arr = [root],
		res = [root.val]
	while (arr.length) {
		let cache = []
		for (let i = 0; i < arr.length; i++) {
			arr[i].left && cache.push(arr[i].left)
			arr[i].right && cache.push(arr[i].right)
		}
		if (cache.length) res.push(cache[cache.length - 1].val)
		arr = cache
	}
	return res
};

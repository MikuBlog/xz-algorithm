/**
 * 字符全排序问题
 * 
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * 
 * 思路：DFS + DP（深度优先遍历加剪枝、简称回溯算法）先固定第一个元素，然后后续全排列，再固定第二个元素后续全排列，再固定第三个元素，后续全排列
 * 1. 设置一个缓存数组，用于判断是否被访问过
 * 2. 遍历每一个元素，并进行标记，然后再通过递归遍历除上一轮遍历剩下的元素
 * 3. 遍历完毕之后将元素踢出队列，遍历下一个元素
 */
var permutation = function(s) {
	let
		result = new Set(),
		visited = []
	dfs(result, visited, [], s)
	return [...result]
};

var dfs = function(result, visited, arr, s) {
	if (arr.length === s.length) {
		result.add(arr.join(""))
		return
	}
	for (let i = 0; i < s.length; i++) {
		if (visited[i]) {
			continue
		}
		visited[i] = true
		arr.push(s[i])
		dfs(result, visited, arr, s)
		visited[i] = false
		arr.pop()
	}
}
/**
 * 数字全排列问题
 * 
 * 思路：与上述一致
 */
function permute(arr) {
	let result = []
	dfs(result, [], arr)
	return result
}

function dfs(result, path, arr) {
	if (path.length === arr.length) {
		result.push([...path])
		return
	}
	for (let i = 0; i < arr.length; i++) {
		if (path.indexOf(arr[i]) !== -1) continue
		path.push(arr[i])
		dfs(result, path, arr)
		path.pop()
	}
}

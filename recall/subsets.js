/**
 * 数组子集
 
 输入：nums = [1,2,3]
 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 
 * 思路：遇到子集与全排列，直接使用递归去解决，如下为递归模板
 */
var subsets = function(nums) {
	let result = [
		[]
	]

	function dfs(nums, result, cache, ind) {
		for (let i = ind; i < nums.length; i++) {
			cache.push(nums[i])
			dfs(nums, result, cache, i + 1)
			result.push([...cache])
			cache.pop()
		}
	}
	dfs(nums, result, [], 0)
	return result
};

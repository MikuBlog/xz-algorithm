/**
 * 加起来的和为目标值
 
 输入：
 [100,10,20,70,60,10,50],80
 
 输出：
 [[10,10,60],[10,20,50],[10,70],[20,60]]
 
 说明：
 给定的候选数集是[100,10,20,70,60,10,50]，目标数是80  
 
 * 思路：回溯 + 剪枝
 * 回溯：先对元素进行排序，后进行回溯，回溯的过程中注意剪枝，避免出现重复元素
 * 去重：如果前一个元素与当前元素相同，没有必要再用当前元素进行回溯，避免出现重复元素
 */
function combinationSum(num, target) {
	if (!num.length) return []
	num.sort((a, b) => a - b)
	let result = []

	function dfs(path, sum, ind) {
		if (sum === target) return result.push([...path])
		else if (sum > target) return
		for (let i = ind; i < num.length; i++) {
			if (i > ind && num[i] === num[i - 1]) continue
			path.push(num[i])
			dfs(path, sum + num[i], i + 1)
			path.pop()
		}
	}
	dfs([], 0, 0)
	return result
}

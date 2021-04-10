/**
 * 合并区间
 * 
 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 
  
 
 示例 1：
 
 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 输出：[[1,6],[8,10],[15,18]]
 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 
 思路：
 1. 先将数组以左端点排好序
 2. 然后判断前后两个数组是否在同一区间，如果在则直接合并并添加到同一队里（只要第一个数组的第二个数比第二个数组的第一个数要大即为有交集的数组）
 3. 将数组合并添加到栈中
 */
var merge = function(intervals) {
	let stack = []
	intervals.sort((a, b) => a[0] - b[0])
	for (let i = 0; i < intervals.length; i++) {
		if (stack[stack.length - 1] && stack[stack.length - 1][1] >= intervals[i][0]) {
			let arr = stack.pop()
			stack.push([arr[0], Math.max(arr[1], intervals[i][1])])
		} else {
			stack.push(intervals[i])
		}
	}
	return stack
};

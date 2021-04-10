/**
 * 插入排序
 * 
 * 思路：
 * 1. 从左往右找基准值并保存起来
 * 2. 遍历数组，如果比基准值小，则将元素向前移动一位（覆盖前一个元素的方式移动），直到找不到比基准值小的位置，将基准值覆盖到当前位置，完成插入操作
 * 3. 继续找下一个基准值，重复第二步
 */
var insertionSort = function(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let
			base = arr[i],
			ind = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < base) {
				arr[j - 1] = arr[j]
				ind++
			}
			if (j === arr.length - 1) {
				arr[ind] = base
			}
		}
	}
	return arr
}

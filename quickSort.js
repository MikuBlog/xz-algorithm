/**
 * 快速排序
 
 思路：采用分而治之的方法，取基准值，将比基准值小的放左侧，比基准值大的放右侧，递归拆解，最终合并为一个新数组
 */
var quickSort = function(arr) {
	if (!arr.length) {
		return []
	}
	let leftArr = [],
		rightArr = [],
		midNums = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > midNums) {
			rightArr.push(arr[i])
		} else {
			leftArr.push(arr[i])
		}
	}
	return quickSort(leftArr).concat(midNums, quickSort(rightArr))
}

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
		midNums = ~~(arr.length / 2)
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > midNums) {
			rightArr.push(arr[i])
		} else {
			leftArr.push(arr[i])
		}
	}
	return quickSort(leftArr).concat(midNums, quickSort(rightArr))
}

/**
 * 采用原地排序的方法，时间和空间更快
 * 
 * 思路：
 * 1. 找基准数
 * 2. 先从右往左找，找到比基准数小的数
 * 3. 再从左往右找，找到比基准数大的数
 * 4. 两数调换位置
 * 5. 如果i 和 j重叠了，这时候这个位置就是基准数的位置了，然后将基准数与i位置的数交换位置即可
 * 6. 采用分治策略，继续比较基准数左侧与右侧元素，进行递归
 * 
 * 注意：
 * 这里先从右往左找的意义在于j找到的第一个数肯定是比基准数要小的，而i找到的第一个数肯定是比基准值大的。假设先从左往右找，i找到第一个基准值大的数刚好又与j相交了，这时候调换位置就会将比基准值大的数调换到前面去，导致顺序错位，如基准值6 与 9 调换，导致9去到前面，顺序错乱
 */
var quickSort = function(arr, left, right) {
	if (left >= right) {
		return
	}
	let
		i = left,
		j = right,
		base = arr[left]
	while (i < j) {
		while (i < j && arr[j] >= base) {
			j--
		}
		while (i < j && arr[i] <= base) {
			i++
		}
		if (i < j) {
			let temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
	arr[left] = arr[i]
	arr[i] = base
	quickSort(arr, left, i - 1)
	quickSort(arr, i + 1, right)
	return arr
}

/**
 * 插入排序
 * 
 * 思路：
 * 1. 找到第一个基准值
 * 2. 往基准值前面找，如果比基准值大，则将该值往后覆盖
 * 3. 直到找到前面的值比基准值小，将基准值覆盖到该值的后面
 * 4. 找下一个基准值，重复上述2、3步骤
 */
var insertionSort = function(arr) {
	for (let i = 1; i < arr.length; i++) {
		let base = arr[i], j = i - 1
		while (j >= 0 && arr[j] > base) arr[j + 1] = arr[j --]
		arr[j + 1] = base
	}
	return arr
}

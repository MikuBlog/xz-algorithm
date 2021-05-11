/**
 * 归并排序，稳定时间O(nlogn)
 */
function mergeSort(arr) {
	if (!arr.length) return []
	let
		leftArr = [],
		rightArr = [],
		ind = ~~(arr.length / 2)
	for (let i = 0; i < arr.length; i++) {
		if (i === ind) continue
		if (arr[i] < arr[ind]) leftArr.push(arr[i])
		else rightArr.push(arr[i])
	}
	return mergeSort(leftArr).concat(arr[ind], mergeSort(rightArr))
}

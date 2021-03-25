/**
 * 合并两个有序链表并且合并后依旧要有序
 * 
 * 思路：将链表转为数组，排好序之后再合并回去
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1 || !l2) return l1 || l2
	let
		leftArr = [],
		rightArr = []
	while (l1) {
		leftArr.push(l1)
		l1 = l1.next
	}
	while (l2) {
		rightArr.push(l2)
		l2 = l2.next
	}
	return leftArr.concat(rightArr).sort((a, b) => a.val - b.val).map((val, ind, arr) => {
		if (ind === arr.length - 1) {
			return val
		}
		val.next = arr[ind + 1]
		return val
	})[0]
};

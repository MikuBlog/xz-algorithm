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

/**
 * 思路：双指针
 * 1. 创建一个头结点，上指针指向第一条链表的头，下指针指向第二条链表的头
 * 2. 比较当前指针下的两个节点的值，谁小头结点的下一个节点指向谁，然后指针后移
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1 && !l2) return null
	if (!l1) return l2
	if (!l2) return l1
	let preHead = cacheNode = new ListNode(-1)
	while (true) {
		if (!l1) {
			preHead.next = l2
			break
		}
		if (!l2) {
			preHead.next = l1
			break
		}
		if (l1.val > l2.val) {
			preHead = preHead.next = l2
			l2 = l2.next
		} else {
			preHead = preHead.next = l1
			l1 = l1.next
		}
	}
	return cacheNode.next
};

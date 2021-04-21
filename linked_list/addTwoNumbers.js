/**
 * 链表两数相加
 * 
 * 思路：类似大数相加，作上下相加处理
 */
var addTwoNumbers = function(l1, l2) {
	if (!l1 && !l2) return null
	if (!l1) return l2
	if (!l2) return l1
	let
		l1Ind = l1,
		l2Ind = l2,
		newNodeHead = temp = new ListNode((l1.val + l2.val) % 10),
		isEnter = l1.val + l2.val >= 10 ?
		1 :
		0
	while (l1.next && l2.next) {
		l1 = l1.next
		l2 = l2.next
		if (l1.val + l2.val + isEnter >= 10) {
			temp.next = new ListNode((l1.val + l2.val + isEnter) % 10)
			isEnter = 1
		} else {
			temp.next = new ListNode(l1.val + l2.val + isEnter)
			isEnter = 0
		}
		temp = temp.next
	}
	if (!l1.next && !l2.next) {
		if (isEnter) {
			temp.next = new ListNode(1)
		}
	}
	while (l1.next) {
		if (l1.next.val + isEnter >= 10) {
			temp.next = new ListNode((l1.next.val + isEnter) % 10)
			isEnter = 1
		} else {
			temp.next = new ListNode(l1.next.val + isEnter)
			isEnter = 0
		}
		l1 = l1.next
		temp = temp.next
		if (!l1.next && isEnter) {
			temp.next = new ListNode(1)
		}
	}
	while (l2.next) {
		if (l2.next.val + isEnter >= 10) {
			temp.next = new ListNode((l2.next.val + isEnter) % 10)
			isEnter = 1
		} else {
			temp.next = new ListNode(l2.next.val + isEnter)
			isEnter = 0
		}
		l2 = l2.next
		temp = temp.next
		if (!l2.next && isEnter) {
			temp.next = new ListNode(1)
		}
	}
	return newNodeHead
};

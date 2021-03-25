/**
 * 反转链表
 
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL
 */
var reverseList = function(head) {
	if (!head) {
		return null
	}
	let arr = []
	while (head) {
		arr.push(head)
		head = head.next
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		if (i === 0) {
			arr[i].next = null
			break
		}
		arr[i].next = arr[i - 1]
	}
	return arr[arr.length - 1]
};

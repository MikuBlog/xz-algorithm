/**
 * 旋转链表
 * 
 * 思路：
 * 1. 通过while循环，将链表设置为环，并记录链表的长度
 * 2. 通过k % 链表长度的方式，得到最终需要旋转的链表长度
 * 3. 重新遍历到第n - k个节点，并将其next断开，返回下一个节点
 */
var rotateRight = function(head, k) {
	if (!head) return null
	let start = head,
		long = 1
	while (head.next) {
		head = head.next
		long++
	}
	head.next = start
	k %= long
	let times = long - k
	while (--times) {
		start = start.next
	}
	result = start.next
	start.next = null
	return result
};

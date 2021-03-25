/**
 * 删除链表节点
 
 思路：当中间节点被删除了，前与后节点相接；
 情况1：头结点被删除，则返回第二个节点
 情况2：中间节点被删除，前后节点相接，返回第一个节点
 */
var deleteNode = function(head, val) {
	if (!head) {
		return null
	}
	if (head.val === val) {
		return head.next
	}
	let cur = head
	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next
			return head
		}
		cur = cur.next
	}
	return head
};

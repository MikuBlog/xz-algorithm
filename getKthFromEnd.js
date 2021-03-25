/**
 * 找到链表中的倒数第k个节点
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
 * 
 * 思路：用一个数组缓存列表，并找到数组length - k位即为倒数第k个节点
 */
var getKthFromEnd = function(head, k) {
	if (!head) {
		return null
	}
	let arr = []
	while (head) {
		arr.push(head)
		head = head.next
	}
	return arr[arr.length - k]
};

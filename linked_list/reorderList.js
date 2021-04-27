/**
 * 重排链表
 
 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 
 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 
 示例 1:
 
 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 示例 2:
 
 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 
 * 思路：先转为线性表，然后利用双指针，头指尾的方式完成重排
 */
var reorderList = function(head) {
	if (!head) return null
	let arr = []
	while (head) {
		arr.push(head)
		head = head.next
	}
	let left = 0,
		right = arr.length - 1
	while (left < right) {
		let temp = arr[left].next
		arr[left].next = arr[right]
		arr[right].next = temp
		left += 1
		right -= 1
	}
	arr[left].next = null
	return arr[0]
};

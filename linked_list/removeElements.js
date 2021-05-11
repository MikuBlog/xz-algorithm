/**
 * 删除链表元素节点
 
 输入：head = [1,2,6,3,4,5,6], val = 6
 输出：[1,2,3,4,5]
 示例 2：
 
 输入：head = [], val = 1
 输出：[]
 示例 3：
 
 输入：head = [7,7,7,7], val = 7
 输出：[]
 
 * 思路：
 * 1. 定义一个前置节点，指向第一个节点；定义一个pre：前一个节点，定义一个
 * 2. 
 */
var removeElements = function(head, val) {
	let
		firstNode = pre = new ListNode(1),
		cur = head
	pre.next = cur
	while (cur) {
		if (cur.val === val) {
			pre.next = cur.next
			cur = cur.next
		} else {
			pre = cur
			cur = cur.next
		}
	}
	return firstNode.next
};

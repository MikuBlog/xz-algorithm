/**
 * 两两交换链表中的节点
 
 输入：head = [1,2,3,4]
 输出：[2,1,4,3]
	
 * 思路：
 * 1. 创建一个虚拟节点，并让虚拟节点指向头节点
 * 2. 用temp保存当前节点位置，node1为第一个节点，node2为第二个节点
 * 3. temp的下一个节点指向node2，node1通过node2指向node3，node2指向node1
 * 4. temp变为node1
 */
var swapPairs = function(head) {
	let
		start = new ListNode(0),
		temp = start
	start.next = head

	while (temp.next && temp.next.next) {
		let
			node1 = temp.next,
			node2 = temp.next.next
		temp.next = node2
		node1.next = node2.next
		node2.next = node1
		temp = node1
	}
	return start.next
};

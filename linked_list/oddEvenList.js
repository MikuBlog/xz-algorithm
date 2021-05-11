/**
 * 奇偶链表
 
 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 
 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 
 示例 1:
 
 输入: 1->2->3->4->5->NULL
 输出: 1->3->5->2->4->NULL
 示例 2:
 
 输入: 2->1->3->5->6->4->7->NULL 
 输出: 2->3->6->7->1->5->4->NULL
 
 * 思路：双指针
 * 1. 定义两个指针，第一个指向奇数节点，第二个指向偶数节点
 * 2. 奇数节点指针借助偶数节点指向下一个奇数节点
 * 3. 偶数节点指针借助自身指向下一个偶数节点
 * 4. 最终得到的是两条链表：奇数链表、偶数链表
 * 5. 将奇数链表的尾结点连接偶数链表的头结点
 * 6. 返回奇数链表的头结点
 */
var oddEvenList = function(head) {
	if (!head) return null
	let
		lHead = cLHead = head,
		rHead = cRHead = head.next
	while (lHead.next && rHead.next) {
		lHead.next = rHead.next
		rHead.next = rHead.next.next
		lHead = lHead.next
		rHead = rHead.next
	}
	lHead.next = cRHead
	return cLHead
};

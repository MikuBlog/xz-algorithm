/**
 * 删除链表的重复元素
 
 输入：head = [1,1,2,3,3]
 输出：[1,2,3]
 
 * 思路：
 * 1. 遇到相同元素则跳过
 * 2. 否则pre、next一起后移
 */
var deleteDuplicates = function(head) {
	if (!head) return null
	let dummy = pre = new ListNode(null),
		cur = head
	dummy.next = head
	while (cur) {
		if (pre.val === cur.val) {
			pre.next = cur.next
			cur = pre.next
		} else {
			pre = cur
			cur = cur.next
		}
	}
	return dummy.next
};

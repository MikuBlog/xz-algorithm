/**
 * 删除链表的倒数第n个节点
 * 
 * 思路：快慢指针
 * 1. 既然要删除倒数第n个节点，那么就要先找到倒数第n个节点，这里利用了快慢指针
 * 2. 情况1，没有节点，直接返回null；情况2，只有一个节点，直接返回null；情况3
 * 3. 通过三个变量保存前、中、后三个节点
 * 4. 假设删除第一个节点，此时前节点为空，直接返回第二个节点即可；其他情况则直接通过前节点指向后节点进行删除
 */
var removeNthFromEnd = function(head, n) {
	if (!head || !head.next) return null
	let
		snow = head,
		fast = head,
		pre = null
	while (n--) {
		fast = fast.next
	}
	while (fast) {
		pre = snow
		snow = snow.next
		fast = fast.next
	}
	if (!pre) {
		return snow.next
	} else {
		pre.next = snow.next
	}
	return head
};

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

/**
 * 思路：双指针（快慢指针）
 * 1. 先让快指针走k步
 * 2. 然后快指针与慢指针一起走，直到快指针先走到尽头
 * 3. 最后慢指针所在的位置就是第k个节点位
 */
var getKthFromEnd = function(head, k) {
	if (!head) return null
	let
		snow = head,
		fast = head
	while (k--) {
		fast = fast.next
	}
	while (fast) {
		fast = fast.next
		snow = snow.next
	}
	return snow
};

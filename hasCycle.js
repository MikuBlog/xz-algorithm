/**
 *	环形链表
 输入：head = [3,2,0,-4], pos = 1
 输出：true
 解释：链表中有一个环，其尾部连接到第二个节点。
 
 思路：通过map来存储节点，如果发现节点的下一个指向已经存在map中，则表示有环形链表
 */
// 用空间换时间
var hasCycle = function(head) {
	if (!head) {
		return false
	}
	let map = new WeakMap()
	while (head) {
		if (!map.has(head)) {
			map.set(head, head.val)
		} else {
			return true
		}
		head = head.next
	}
	return false
};

/**
 * 思路：采用双指针（快慢指针）
 * 1. 快指针比慢指针快两倍
 * 2. 如果快指针最终与慢指针相等，则表示有环
 * 3. 如果快指针提前为null，则表示没有环
 */

var hasCycle = function(head) {
	if (!head) {
		return false
	}
	let slow = fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			return true
		}
	}
	return false
};

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
	let map = new Map()
	while (head) {
		if (!head.next) {
			return false
		}
		if (!map.has(head)) {
			map.set(head, head.val)
		} else {
			return true
		}
		head = head.next
	}
};
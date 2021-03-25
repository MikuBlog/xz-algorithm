/**
 * 判断两条链表是否有交集
 * 思路：遍历第一个链表，缓存节点，遍历第二个链表，判断是否有相同的，不同就删除之前缓存的节点，相同就返回新节点
 */
var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) {
		return null
	}
	let map = new WeakMap()
	while (headA) {
		map.set(headA, headA.val)
		headA = headA.next
	}
	while (headB) {
		if (map.has(headB)) {
			return headB
		} else {
			map.delete(headB)
		}
		headB = headB.next
	}
	return null
};

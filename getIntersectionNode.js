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
/**
 * 思路：
 * 1. 遍历链表，自己走自己的路
 * 2. 遍历完毕后没有发现有相同的节点，则走别人的路（在第二遍换边了之后，大家的步伐就一致了）
 * 3. 在步伐一致的情况下比较有相同的节点，则返回该节点，如果一直没有的话，两边的节点到最后都会为null，这时候则会返回null
 */
var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) {
		return null
	}
	let
		h1 = headA,
		h2 = headB
	while (h1 !== h2) {
		h1 = h1 === null ? headB : h1.next
		h2 = h2 === null ? headA : h2.next
	}
	return h1
};

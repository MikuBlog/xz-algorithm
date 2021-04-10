/**
 * 是否有环
 * 
 * 思路：双指针（快慢指针）
 * 1. 用快慢指针走到相交点
 */
var detectCycle = function(head) {
	if (!head) return null
	let
		snow = head,
		fast = head
	while (fast && fast.next) {
		fast = fast.next.next
		snow = snow.next
		if (fast === snow) return true
	}
	return null
};

/**
 * 环的起始点
 * 
 * 思路：双指针（快慢指针）
 * 1. 先用快慢指针走到相交点
 * 2. 再将慢指针置为头结点，然后两个指针以相同的步伐走，直到相交即为环的第一个节点
 */
var detectCycle = function(head) {
	if (!head) return null
	if (!head.next) return null
	let
		snow = head,
		fast = head
	while (fast && fast.next) {
		fast = fast.next.next
		snow = snow.next
		if (fast === snow) break
	}
	if (fast !== snow) return null
	snow = head
	while (fast !== snow) {
		fast = fast.next
		snow = snow.next
	}
	return snow
};

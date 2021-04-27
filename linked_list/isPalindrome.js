/**
 * 回文链表
 
 示例 1:
 
 输入: 1->2
 输出: false
 示例 2:
 
 输入: 1->2->2->1
 输出: true
 
 * 思路：装为线性表再双指针前后比对
 */
var isPalindrome = function(head) {
	if (!head) return false
	let arr = []
	while (head) {
		arr.push(head)
		head = head.next
	}
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		if (arr[left].val === arr[right].val) {
			left += 1
			right -= 1
		} else {
			return false
		}
	}
	return true
};

/**
 * 思路：快慢指针找中点，将中点之后的节点颠倒，然后再一一匹配两个链表节点的值
 */
var isPalindrome = function(head) {
	if (!head) return false

	function reverse(pre, cur) {
		if (!cur) return pre
		let next = cur.next
		cur.next = pre
		pre = cur
		cur = next
		return reverse(pre, cur)
	}
	let
		snow = head,
		fast = head
	while (fast && fast.next) {
		snow = snow.next
		fast = fast.next.next
	}
	snow = reverse(null, snow)
	while (snow && head) {
		if (snow.val === head.val) {
			snow = snow.next
			head = head.next
		} else {
			return false
		}
	}
	return true
};

/**
 * 反转链表
 
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL
 */
var reverseList = function(head) {
	if (!head) {
		return null
	}
	let arr = []
	while (head) {
		arr.push(head)
		head = head.next
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		if (i === 0) {
			arr[i].next = null
			continue
		}
		arr[i].next = arr[i - 1]
	}
	return arr[arr.length - 1]
};

/**
 * 原地翻转链表
 * 思路：
 * 1. 四种情况：第一种为无节点，返回null；第二种为只有一个节点，返回这个节点；第三种为只有两个节点，两个节点进行交转；第四种为三个节点及以上，保存状态前、中、后三个节点，每次遍历的时候中指向前，前变为中，中改为后，后改为后一个；从而保证了链表的指向
 */
var reverseList = function(head) {
	if (!head) return null
	if (!head.next) return head
	if (!head.next.next) {
		let temp = head.next
		head.next.next = head
		head.next = null
		return temp
	}
	let
		pre = head,
		cur = head.next,
		temp = cur.next
	while (temp) {
		cur.next = pre
		pre = cur
		cur = temp
		temp = temp.next
	}
	cur.next = pre
	head.next = null
	return cur
};

/**
 * 思路：更简洁的写法，只需要通过中间变量next保存下一个值即可
 */
var reverseList = function(head) {
	let
		pre = null,
		cur = head
	while (cur) {
		let next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}
	return pre
};

/**
 * 将while循环转为递归写法
 */
var reverseList = function(head) {
	function reverse(pre, cur) {
		if (!cur) return pre
		let next = cur.next
		cur.next = pre
		pre = cur
		cur = next
		return reverse(pre, cur)
	}
	return reverse(null, head)
};

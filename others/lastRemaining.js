/**
 * 圆圈中最后剩下的数字
 * 
 * 思路：
 * 1. 先组成链表环
 * 2. 然后在链表环中遍历删除节点
 * 
 * 缺点：
 * 1. 十分消耗内存
 * 2. 速度非常慢
 */
function Node(val) {
	this.val = val
	this.next = null
}
var lastRemaining = function(n, m) {
	if (m === 1) return n - 1
	let
		root = new Node(0),
		head = root
	for (let i = 1; i < n; i++) {
		head.next = new Node(i)
		head = head.next
	}
	head.next = root
	while (true) {
		let pre = cur = root
		for (let i = 1; i < m; i++) {
			pre = cur
			cur = cur.next
		}
		pre.next = cur.next
		root = cur.next
		if (root === cur) {
			return root.val
		}
	}
	return root.val
};

/**
 * 思路：约瑟夫环问题
 * 1. 第N次的时候，去掉 m % n，得到值为x
 * 2. 第N - 1次的时候，去掉 m + x % n = (m + f(N - 1, m)) %  m
 * 3. 当n为1的时候，只有一个数，直接为0
 */

var lastRemaining = function(n, m) {
    if(n == 1) return 0
    let x = lastRemaining(n - 1, m)
    return (m + x) % n
};

/**
 * 将递归简化为遍历，将空间复杂度降低为O(1)
 */
var lastRemaining = function(n, m) {
	let res = 0
	for (let i = 2; i <= n; i++) {
		res = (res + m) % i
	}
	return res
};

/**
 * 复杂链表的复制
 * 
 * 思路：使用深拷贝即可
 */
var copyRandomList = function(head) {
	return deepCopy(head)
};

var deepCopy = function(source, store = new WeakMap) {
	if (!source) return null
	if (store.has(source)) return store.get(source)
	let target = new Node(source.val, null, null)
	store.set(source, target)
	target.next = deepCopy(source.next, store)
	target.random = deepCopy(source.random, store)
	return target
}

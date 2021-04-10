/**
 * LRU缓存策略
 * 
 LRUCache lRUCache = new LRUCache(2);
 lRUCache.put(1, 1); // 缓存是 {1=1}
 lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 lRUCache.get(1);    // 返回 1
 lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 lRUCache.get(2);    // 返回 -1 (未找到)
 lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 lRUCache.get(1);    // 返回 -1 (未找到)
 lRUCache.get(3);    // 返回 3
 lRUCache.get(4);    // 返回 4
 
 思路：（先进先出）
 1. 缓存最新最近的数据
 2. 每次获取数据都删除原数据并重新添加数据
 3. 每次添加数据后都查看当前缓存区是否大于最大缓存值，如果是的话将删除最旧的数据
 */
var LRUCache = function(capacity) {
	this.cache = new Map()
	this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if (this.cache.has(key)) {
		let val = this.cache.get(key)
		this.cache.delete(key)
		this.cache.set(key, val)
		return val
	} else {
		return -1
	}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	if (this.cache.has(key)) {
		this.cache.delete(key)
	}
	this.cache.set(key, value)
	if (this.cache.size > this.max) {
		this.cache.delete(this.cache.keys().next().value)
	}
};

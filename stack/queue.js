/**
 * 通过两个栈实现一个队列
 * 
 * 思路：第一个栈的值全部pop进第二个栈里面，第二个栈再进行pop则按照队列的方式出队
 * 关键点：控制两个栈的转换
 * 1. 当第二个栈为空的时候，将第一个栈的所有数pop进第二个栈
 * 2. 当第二个栈不为空的时候，保留第一个栈的所有数，待第二个栈出队完毕再执行第一步
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
	this.stack_1 = []
	this.stack_2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
	this.stack_1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	if (!this.stack_1.length && !this.stack_2.length) return
	if (!this.stack_2.length) {
		while (this.stack_1.length) {
			this.stack_2.push(this.stack_1.pop())
		}
	}
	return this.stack_2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
	return this.stack_2[this.stack_2.length - 1] || this.stack_1[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return !this.stack_1.length && !this.stack_2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

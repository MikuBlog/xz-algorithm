/**
 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 
  
 
 示例:
 
 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.min();   --> 返回 -3.
 minStack.pop();
 minStack.top();      --> 返回 0.
 minStack.min();   --> 返回 -2.
 
 难点：如何获得栈中的最小值且每次查找都保持O(1)的时间复杂度
 
 思路：动态规划
 1. 声明一个最小值栈，采用动态规划设定全局最小值
 2. 每次push值的时候，都追加当前全局最小值，方法即是与前一个最小值比较得到当前最小值（全局最小值）
 3. 每次pop值的时候，都会弹出值，依旧保持全局最小值
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.list = []
	this.minList = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	let ind = this.minList.length - 1
	this.minList.push(Math.min(x, this.minList[ind] === undefined ?
		x :
		this.minList[ind]))
	this.list.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.minList.pop()
	this.list.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.list[this.list.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
	return this.minList[this.minList.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

/**
 * 斐波拉契数列
 
 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 
 输入：n = 2
 输出：1
 
 输入：n = 5
 输出：5
 
 思路：设置缓存，并通过递归的方式计算斐波拉契数列，如果缓存存在值，则直接获取斐波拉契数列值，否则重新计算
 */
let cache = {}
var fib = function(n) {
	if (n === 0) {
		return 0
	} else if (n === 1) {
		return 1
	} else if (cache[n]) {
		return cache[n]
	} else {
		return cache[n] = (fib(n - 1) + fib(n - 2)) % 1000000007
	}
};

/**
 * 思路：相比缓存来说，这样的空间复杂度变为O(1)，时间复杂度只要O(n)
 */
var fib = function(n) {
	if (n === 1 || n === 2) return 1
	let
		pre = 1,
		next = 1,
		sum = 0
	for (let i = 3; i <= n; i++) {
		sum = (pre + next) % 1000000007
		pre = next
		next = sum
	}
	return sum
};

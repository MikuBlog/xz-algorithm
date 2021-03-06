/**
 * 青蛙跳台阶
 
 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 
 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 输入：n = 2
 输出：2
 
 输入：n = 7
 输出：21
 
 输入：n = 0
 输出：1
 
 思路：青蛙跳台阶本质上就是斐波拉契函数
 */
let cache = {}
var numWays = function(n) {
	if (n === 0 || n === 1) {
		return 1
	} else if (cache[n]) {
		return cache[n]
	} else {
		return cache[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007
	}
};

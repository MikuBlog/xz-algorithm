/**
 * 爬楼梯
 * 
 * 思路：跟青蛙跳台阶、斐波那契函数相似的解法
 */
var climbStairs = function(n) {
	if (n === 1) return 1
	if (n === 2) return 2
	let
		pre = 1,
		next = 1,
		sum = 0
	for (let i = 2; i <= n; i++) {
		sum = pre + next
		pre = next
		next = sum
	}
	return sum
};

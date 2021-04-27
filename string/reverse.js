/**
 * 整数翻转
 
 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 
 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 
 假设环境不允许存储 64 位整数（有符号或无符号）。
  
 
 示例 1：
 
 输入：x = 123
 输出：321
 示例 2：
 
 输入：x = -123
 输出：-321
 示例 3：
 
 输入：x = 120
 输出：21
 示例 4：
 
 输入：x = 0
 输出：0
 
 * 
 */
var reverse = function(x) {
	x = String(x).split("")
	let
		left = 0,
		right = x.length - 1
	while (left < right) {
		if (x[left] === '-') {
			left += 1
			continue
		}
		let temp = x[left]
		x[left++] = x[right]
		x[right--] = temp
	}
	let result = x.join("")
	if (result < -(2 ** 31)) return 0
	else if (result > 2 ** 31 - 1) return 0
	else return result
};

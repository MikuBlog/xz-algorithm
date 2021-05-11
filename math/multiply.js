/**
 * 大数相乘
 
 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 
 示例 1:
 
 输入: num1 = "2", num2 = "3"
 输出: "6"
 示例 2:
 
 输入: num1 = "123", num2 = "456"
 输出: "56088"
 
 * 思路：核心就是竖式相乘
 * 1. 定义一个结果集的长度，最大肯定不会超过num1与num2的长度之和
 * 2. 定义一个结果值的计算索引，一般从结果集的最后一位开始算起
 * 3. 定义两个for循环，模拟num1与num2的竖式相乘
 * 4. 注意外层循环结束之后，结果集需要进一位（因为竖式相乘开始以后一位开始算起，对应也要进位）
 */
var multiply = function(num1, num2) {
	let
		result = Array(num1.length + num2.length).fill(0),
		ind = result.length - 1
	for (let i = num1.length - 1; i >= 0; i--) {
		let nowInd = ind
		for (let j = num2.length - 1; j >= 0; j--) {
			result[nowInd--] += num1[i] * num2[j]
		}
		ind -= 1
	}
	for (let i = result.length - 1; i >= 0; i--) {
		if (result[i - 1] !== undefined && result[i] >= 10) {
			result[i - 1] += ~~(result[i] / 10)
			result[i] %= 10
		}
	}
	result = result.join("").replace(/^0+/, '')
	return result ?
		result :
		'0'
};

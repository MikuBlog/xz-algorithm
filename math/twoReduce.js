/**
 * 大数相减
 * 
 * 思路：利用竖式的形式进行减法，如果减不满取前一位的数；如果最终减到的结果前面带了符号，则调换两个数字再做一次减法，最终在结果前面添加符号即可
 */
function twoReduce(num1, num2) {
	let
		max = Math.max(num1.length, num2.length),
		result = Array(max).fill(0)
	num1 = num1.padStart(max, '0')
	num2 = num2.padStart(max, '0')
	for (let i = max - 1; i >= 0; i--) {
		result[i] += (+num1[i]) - (+num2[i])
		if (result[i] < 0 && result[i - 1] !== undefined) {
			result[i - 1] -= 1
			result[i] += 10
		}
	}
	if (result[0] < 0) {
		return `-${twoReduce(num2, num1)}`
	}
	return result.join("")
}

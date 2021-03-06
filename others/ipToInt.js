/**
 * 将ip转换为整数
 
 例如，ip地址为10.0.3.193，把每段拆分成一个二进制形式组合起来为00001010 00000000 00000011 11000001，然后把这个二进制数转变成十进制整数就是167773121。
 
 * 思路：
 * 1. 每一个数字都是8位
 * 2. 将第一个数字右移24位，第二个数字右移16位，第三个数字右移8位
 * 3. 将四个数字进行或运算，最终得到四个二进制数相加的结果
 */
const transferInt = str => {
	let [num1, num2, num3, num4] = str.split(".")
	num1 = num1 << 24
	num2 = num2 << 16
	num3 = num3 << 8
	return num1 | num2 | num3 | num4
}

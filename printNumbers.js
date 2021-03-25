/**
 * 打印从1到最大的n位数
 
 思路：简单遍历
 */
var printNumbers = function(n) {
	let
		arr = [],
		len = 10 ** n - 1
	for (let i = 0; i < len; i++) {
		arr.push(i + 1)
	}
	return arr
};

/**
 * 考虑大数
 
 思路：将数字符串化，并将字符串化为数组的形式，每次在数组的末尾 + 1，待满10了以后完成进位操作，并将数组合并为字符串添加到数组中，待字符串为最终值时停止遍历
 */
var printNumbers = function(n) {
	let
		arr = [],
		str = Array(n).fill(0),
		max = '9'.repeat(n),
		cStr = ""
	while (cStr !== max) {
		str[n - 1] += 1
		str[n - 1] === 10 && formatNumbers(str)
		arr.push(cStr = str.join(""))
	}
	return arr
};
var formatNumbers = function(s) {
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] >= 10) {
			s[i - 1] += 1
			s[i] = 0
		} else {
			break
		}
	}
}

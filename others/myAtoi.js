/**
 * 字符串转换为整数
 
 输入：s = "42"
 输出：42
 解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
 第 1 步："42"（当前没有读入字符，因为没有前导空格）
          ^
 第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
          ^
 第 3 步："42"（读入 "42"）
            ^
 解析得到整数 42 。
 由于 "42" 在范围 [-231, 231 - 1] 内，最终结果为 42 。

 * 思路：使用自动机
 */
var myAtoi = function(s) {
	let val = 0,
		ind = 0,
		flag = 1,
		regexp = new RegExp(/[0-9]/)
	while (s[ind] === ' ') ind++
	if (s[ind] === '-') {
		flag = -1;
	}
	if (s[ind] === '+' || s[ind] === '-') ind++
	while (ind < s.length && regexp.test(s[ind])) {
		val = val * 10 + (+s[ind++])
		if (val > 2 ** 31 - 1) {
			val = flag === 1 ? 2 ** 31 - 1 : 2 ** 31
			break
		}
	}
	return flag === 1 ?
		val :
		-val
};

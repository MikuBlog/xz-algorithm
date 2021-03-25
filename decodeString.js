/**
 * 字符串解码
 输入：s = "3[a]2[bc]"
 输出："aaabcbc"
 
 输入：s = "3[a2[c]]"
 输出："accaccacc"
 思路：从里往外匹配，从里往外处理
 */
var decodeString = function(s) {
	let regexp = /(\d+)\[([a-zA-Z]+)\]/g
	s = s.replace(regexp, (str, num, p) => {
		return p.repeat(num)
	})
	if (regexp.test(s)) {
		return decodeString(s)
	}
	return s
};

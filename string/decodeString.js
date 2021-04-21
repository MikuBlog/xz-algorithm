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

/**
 * 思路：涉及到闭合问题，使用栈去实现
 * 1. 当匹配到右括号时，表示形成了字符串，这时将所有字符取出，弹出左括号，将所有数字取出进行拼接，重复并得到一个新串
 * 2. 将新串覆盖到原来的位置，继续重复步骤1
 */
var decodeString = function(s) {
	let stack = []
	for (let i = 0; i < s.length; i++) {
		let tempStr = "",
			num = ""
		if (stack[stack.length - 1] && s[i] === ']') {
			while (stack[stack.length - 1] !== '[') {
				tempStr = stack.pop() + tempStr
			}
			stack.pop()
			while (!isNaN(stack[stack.length - 1])) {
				num = stack.pop() + num
			}
			stack[stack.length] = tempStr.repeat(num)
		} else {
			stack.push(s[i])
		}
		tempStr = ""
	}
	return stack.join("")
};

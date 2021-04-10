/**
 * 判断括号是否有效
	输入：s = "()"
	输出：true
	
	输入：s = "{[]}"
	输出：true
	
	输入：s = "([)]"
	输出：false
	
	输入：s = "(]"
	输出：false
	
	思路：通过遍历的形式去除所有括号组，如果依旧存在，那么括号格式不正确
 */
var isValid = function(s) {
	if (s.length % 2 || !s.length) {
		return false
	}
	let times = s.length / 2
	while (times) {
		s = s.replace(/({})|(\[\])|(\(\))/g, '')
		times--
	}
	return s === ''
};

/**
 * 思路：使用栈进行匹配
 */
var isValid = function(s) {
	let stack = []
	for (let i = 0; i < s.length; i++) {
		let stackInd = stack.length - 1
		if (stack[stackInd] === "(" && s[i] === ")" || stack[stackInd] === "[" && s[i] === "]" || stack[
				stackInd] === "{" && s[i] === "}") {
			stack.pop()
		} else {
			stack.push(s[i])
		}
	}
	return !stack.length
};

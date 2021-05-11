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

/**
 * 是否是有效的html
 */
var isValidHtml = function(s) {
	let stack = []
	s = s.match(/<\/?[a-zA-Z]+\/?>/g)
	for (let i = 0; i < s.length; i++) {
		let stackInd = stack.length - 1
		if (jutifyTag(stack[stackInd], s[i])) {
			stack.pop()
		} else {
			stack.push(s[i])
		}
	}
	return !stack.length
};

var jutifyTag = function(sTag, eTag) {
	switch (sTag) {
		case "<div>":
			return eTag === '</div>'
		case "<p>":
			return eTag === '</p>'
		case "<span>":
			return eTag === '</span>'
		case "<a>":
			return eTag === '</a>'
		case "<input>":
			return eTag === '</input>'
	}
	switch (eTag) {
		case "<hr/>":
			return true
		case "<br/>":
			return true
		case "<img>":
			return true
	}
	return false
}

/**
 * 括号生成
 
 示例 1：
 
 输入：n = 3
 输出：["((()))","(()())","(())()","()(())","()()()"]
 示例 2：
 
 输入：n = 1
 输出：["()"]
 
 思路：递归 + 剪枝 + 回溯
 1. n为多少，左括号和右括号就有多少个
 2. 先添加左括号，左括号的数量大于右括号的数量时再添加右括号，直到括号添加完即可，递归回溯完成整个过程
 */
var generateParenthesis = function(n) {
	function genBracket(left, right, result, str) {
		if (left === n && right === n) return result.push(str)
		if (left < n) genBracket(left + 1, right, result, str + '(')
		if (left > right && right < n) genBracket(left, right + 1, result, str + ')')
	}
	let result = []
	genBracket(0, 0, result, "")
	return result
};

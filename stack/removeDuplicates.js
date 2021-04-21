/**
 * 删除字符串中的所有相邻重复项
 
 示例：
 
 输入："abbaca"
 输出："ca"
 解释：
 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 
 * 思路：栈的匹配方法立马解决
 */
var removeDuplicates = function(S) {
	let stack = []
	for (let i = 0; i < S.length; i++) {
		let stackInd = stack.length - 1
		if (stack[stackInd] && stack[stackInd] === S[i]) {
			stack.pop()
		} else {
			stack.push(S[i])
		}
	}
	return stack.join("")
};

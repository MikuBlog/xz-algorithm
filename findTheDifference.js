/**
 * 找不同字符串
 输入：s = "abcd", t = "abcde"
 输出："e"
 解释：'e' 是那个被添加的字母。
 
 输入：s = "", t = "y"
 输出："y"
 
 思路：遍历去除匹配的所有字符，剩余的字符就是需要的字符
 */
let findTheDifference = function(s, t) {
	for (let i = 0; i < s.length; i++) {
		let index = t.indexOf(s[i])
		if (index !== -1) {
			t = `${t.substring(0, index)}${t.substring(index + 1, t.length)}`
		}
	}
	return t
};

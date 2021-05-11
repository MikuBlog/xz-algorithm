/**
 * 最长回文子串
 
 给你一个字符串 s，找到 s 中最长的回文子串。
 
  
 
 示例 1：
 
 输入：s = "babad"
 输出："bab"
 解释："aba" 同样是符合题意的答案。
 示例 2：
 
 输入：s = "cbbd"
 输出："bb"
 示例 3：
 
 输入：s = "a"
 输出："a"
 示例 4：
 
 输入：s = "ac"
 输出："a"
 
 * 思路：双指针中心扩展法
 * 1. 定义两个全局指针left、right以及一个最长衡量值res
 * 2. 外循环用于找第n个字符
 * 3. 找到第n个字符后，从第n个字符开始左右两边扩散，判断左右两侧是否相等；如果相等的话则是回文元素，并记录当前的最长长度以及左指针与右指针的位置
 * 4. 最后返回一个左指针与右指针之间的所有字符
 */
var longestPalindrome = function(s) {
	if (!s.length) return ""
	let
		res = 1,
		left = 0,
		right = 0
	for (let i = 0; i < s.length; i++) {
		let
			l = i - 1,
			r = i + 1
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			let len = r - l + 1
			if (len > res) {
				res = len
				left = l
				right = r
			}
			l -= 1
			r += 1
		}
		l = i
		r = i + 1
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			let len = r - l + 1
			if (len > res) {
				res = len
				left = l
				right = r
			}
			l -= 1
			r += 1
		}
	}
	return s.substring(left, right + 1)
};

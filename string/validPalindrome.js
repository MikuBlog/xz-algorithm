/**
 * 验证回文字符串
 
 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 
 示例 1:
 
 输入: "aba"
 输出: True
 示例 2:
 
 输入: "abca"
 输出: True
 解释: 你可以删除c字符。
 
 * 思路：双指针，相同则跳过，不同则选择删除
 */
var validPalindrome = function(s) {
	let
		left = 0,
		right = s.length - 1
	while (left <= right) {
		if (s[left] === s[right]) {
			left += 1
			right -= 1
		} else {
			return jutify(s, left + 1, right) || jutify(s, left, right - 1)
		}
	}
	return true
};

function jutify(s, left, right) {
	while (left <= right) {
		if (s[left] === s[right]) {
			left += 1
			right -= 1
		} else {
			return false
		}
	}
	return true
}

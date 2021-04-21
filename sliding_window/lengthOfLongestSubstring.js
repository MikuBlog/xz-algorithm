/**
 * 最长不含重复字符的子字符串
 
 示例 1:
 
 输入: "abcabcbb"
 输出: 3 
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 示例 2:
 
 输入: "bbbbb"
 输出: 1
 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 示例 3:
 
 输入: "pwwkew"
 输出: 3
 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 
 * 思路：双指针
 * 1. 右指针负责遍历新元素，左指针负责删除重复元素
 */
var lengthOfLongestSubstring = function(s) {
	let
		left = 0,
		maxLen = 0,
		map = new Map()
	for (let i = 0; i < s.length; i++) {
		while (map.has(s[i])) {
			map.delete(s[left++])
		}
		map.set(s[i], true)
		maxLen = Math.max(maxLen, map.size)
	}
	return maxLen
};

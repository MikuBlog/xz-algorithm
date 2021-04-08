/**
 * 无重复字符串的最长子串
 
 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 
  
 
 示例 1:
 
 输入: s = "abcabcbb"
 输出: 3 
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 
 思路：滑动窗口（双指针）
 1. 无重复右指针右移，直到重复了左指针右移
 2. 每次移动完毕之后保留最大长度
 */
var lengthOfLongestSubstring = function(s) {
	let
		left = 0,
		right = 0,
		maxLen = 0,
		cache = new Map()
	while (right < s.length) {
		for (let i = left; i <= right; i++) {
			if (cache.has(s[i])) {
				left++
				break
			} else {
				cache.set(s[i], true)
			}
		}

		right++
		maxLen = Math.max(cache.size, maxLen)
		cache.clear()
	}
	return maxLen
};

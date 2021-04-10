/**
 * 最长公共前缀
 * 
 编写一个函数来查找字符串数组中的最长公共前缀。
 
 如果不存在公共前缀，返回空字符串 ""。
 
  
 
 示例 1：
 
 输入：strs = ["flower","flow","flight"]
 输出："fl"
 示例 2：
 
 输入：strs = ["dog","racecar","car"]
 输出：""
 解释：输入不存在公共前缀。
 
 思路：暴力穷举双指针
 */
var longestCommonPrefix = function(strs) {
	if (!strs.length || !strs[0]) return ""
	let
		left = 0,
		right = 0,
		str = "",
		justifyStr = strs[0]
	while (right < justifyStr.length) {
		str = ""
		for (let i = left; i <= right; i++) {
			str += justifyStr[i]
		}
		for (let i = 0; i < strs.length; i++) {
			let ind = strs[i].indexOf(str)
			if (ind === -1 || ind !== 0) return str.substring(0, str.length - 1)
		}
		right++
	}
	return str
};

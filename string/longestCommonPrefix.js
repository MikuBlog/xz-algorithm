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
	if (!strs.length) return ''
	if (strs.length === 1) return strs[0]
	let str = ""
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j - 1][i] !== strs[j][i]) return str
			else if (j === strs.length - 1) str += strs[j][i]
		}
	}
	return str
};

/**
 * 最长公共子序列
 
 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 
 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 
 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 
  
 
 示例 1：
 
 输入：text1 = "abcde", text2 = "ace" 
 输出：3  
 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 示例 2：
 
 输入：text1 = "abc", text2 = "abc"
 输出：3
 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 示例 3：
 
 输入：text1 = "abc", text2 = "def"
 输出：0
 解释：两个字符串没有公共子序列，返回 0 。
 
 * 思路：动态规划
 * 1. 构造一个二维表格，横向为字符串1，纵向为字符串2
 * 2. 初始化没有字符时候的情况，默认为0
 * 3. 然后两重循环填满表格，当比对的字符相同的情况，则填入单元格的值为左上一格的值 + 1；当比对的字符不相同的情况时，则取上一格和左一格的最大值
 */
var longestCommonSubsequence = function(text1, text2) {
	let dp = Array(text1.length + 1).fill(0).map(val => Array(text2.length + 1).fill(0))
	for (let i = 0; i < dp.length; i++) {
		dp[i][0] = 0
	}
	for (let i = 0; i < dp[0].length; i++) {
		dp[0][i] = 0
	}
	for (let i = 1; i <= text1.length; i++) {
		for (let j = 1; j <= text2.length; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[dp.length - 1][dp[0].length - 1]
};

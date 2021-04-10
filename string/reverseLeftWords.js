/**
 * 左旋转字符串
 * 
 * 输入: s = "abcdefg", k = 2
 * 输出: "cdefgab"
 * 
 * 输入: s = "lrloseumgh", k = 6
 * 输出: "umghlrlose"
 * 
 * 思路：简单利用substring即可完成
 */
var reverseLeftWords = function(s, n) {
	return `${s.substring(n)}${s.substring(0, n)}`
};

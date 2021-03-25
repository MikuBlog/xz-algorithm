/**
 * 翻转单词
 * 
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 * 
 * 思路：利用js api完成
 */
var reverseWords = function(s) {
	return s.split(" ").reverse().filter(val => val).join(" ").replace(/^\s+|\s+$/, '')
};

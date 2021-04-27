/**
 * 翻转单词
 * 
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 * 
 * 思路：利用js api完成
 */
var reverseWords = function(s) {
	return s.trim().split(/\s+/).reverse().join(" ")
};

/**
 * 手写翻转单词
 * 
 * 思路：先取出前后空格，再利用两个数组形成栈的形式完成操作
 */
var reverseWords = function(s) {
	let
		left = 0,
		right = s.length - 1,
		list = [],
		list_2 = [],
		word = ""
	while (s[left] === ' ') left++
	while (s[right] === ' ') right--
	while (left <= right) {
		while (s[left] !== ' ' && left <= right) word += s[left++]
		while (s[left] === ' ') left++
		list.push(word)
		word = ""
	}
	while (list.length) {
		list_2.push(list.pop())
	}
	return list_2.join(" ")
};

/**
 * 反转字符串中的单词 III
 
 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 
  
 
 示例：
 
 输入："Let's take LeetCode contest"
 输出："s'teL ekat edoCteeL tsetnoc"
 
 * 思路：转为线性表再使用双指针翻转
 */
var reverseWords = function(s) {
	s = s.split(" ")
	return s.map(val => {
		val = val.split("")
		let
			left = 0,
			right = val.length - 1
		while (left < right) {
			let temp = val[left]
			val[left] = val[right]
			val[right] = temp
			left += 1
			right -= 1
		}
		return val.join("")
	}).join(" ")
};

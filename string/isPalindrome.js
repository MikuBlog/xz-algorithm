/**
 * 验证回文串
 
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 
 说明：本题中，我们将空字符串定义为有效的回文串。
 
 示例 1:
 
 输入: "A man, a plan, a canal: Panama"
 输出: true
 示例 2:
 
 输入: "race a car"
 输出: false
 
 * 思路：双指针，跳过非英文数字字符即可
 */
var isPalindrome = function(s) {
	s = s.toLowerCase()
	let
		left = 0,
		right = s.length - 1
	while (left < right) {
		while (left < right && !(s[left] >= 'a' && s[left] <= 'z' || s[left] >= '0' && s[left] <= '9')) left++
		while (left < right && !(s[right] >= 'a' && s[right] <= 'z' || s[right] >= '0' && s[right] <= '9')) right--
		if (left < right && s[left++] !== s[right--]) return false
	}
	return true
};

/**
 * 回文数
 
 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 
 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 
  
 
 示例 1：
 
 输入：x = 121
 输出：true
 示例 2：
 
 输入：x = -121
 输出：false
 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 示例 3：
 
 输入：x = 10
 输出：false
 解释：从右向左读, 为 01 。因此它不是一个回文数。
 示例 4：
 
 输入：x = -101
 输出：false
 
 * 思路：双指针
 */
var isPalindrome = function(x) {
	x = String(x)
	let
		left = 0,
		right = x.length - 1
	while (left < right) {
		if (x[left++] !== x[right--]) return false
	}
	return true
};

/**
 * 思路：将数字后半部分进行反转，然后再两数比较
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let num = 0
  while (num < x) {
    num = num * 10 + x % 10
    x = ~~(x / 10)
  }
  return num === x || ~~(num / 10) === x
};

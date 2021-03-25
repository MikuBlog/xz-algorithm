/**
 * 单词规律
 输入: pattern = "abba", str = "dog cat cat dog"
 输出: true
 
 输入:pattern = "abba", str = "dog cat cat fish"
 输出: false
 
 思路：分成数组，逐个匹配。第一次匹配时，先将字母与字符串用键值的形式缓存起来，下次匹配时先去取值，然后判断是否含有该元素，如果没有则返回false，命中缓存则返回true
 */
var wordPattern = function(pattern, s) {
	let cache = {}
	pattern = pattern.split("")
	s = s.split(" ")
	if (pattern.length !== s.length) {
		return false
	}
	for (let i = 0; i < s.length; i++) {
		if (!cache[pattern[i]] && !Object.values(cache).includes(s[i])) {
			cache[pattern[i]] = s[i]
			continue
		}
		if (cache[pattern[i]] !== s[i]) {
			return false
		}
	}
	return true
};

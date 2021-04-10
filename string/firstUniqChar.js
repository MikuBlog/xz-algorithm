/**
 * 字符串中的第一个唯一字符
 s = "leetcode"
 返回 0
 
 s = "loveleetcode"
 返回 2
 
 思路：通过cache保存值，索引与次数，最后判断是否含有1的键值，如果有则返回索引，否则返回-1
 */
var firstUniqChar = function(s) {
	let cache = {}
	for (let i = 0; i < s.length; i++) {
		if (!cache[s[i]]) {
			cache[s[i]] = {
				index: i,
				times: 1
			}
		} else {
			cache[s[i]].times++
		}
	}
	for (let key in cache) {
		if (cache[key].times === 1) {
			return cache[key].index
		}
	}
	return -1
};

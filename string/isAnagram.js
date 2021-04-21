/**
 * 有效的字母异位词
 
 示例 1:
 
 输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:
 
 输入: s = "rat", t = "car"
 输出: false
 
 * 思路：排序后比对
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false
	s = s.split("").sort()
	t = t.split("").sort()
	for (let i = 0; i < s.length; i++) {
		if (s[i].charCodeAt() - t[i].charCodeAt() !== 0) return false
	}
	return true
};

/**
 * 思路：hash表，遍历t字符串，当减去的值已经为0或不存在的时候，那么返回false
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let map = new Map()
  for(let i = 0; i < s.length; i ++) {
    let val = map.get(s[i])
    if(val) {
      map.set(s[i], val + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  for(let i = 0; i < t.length; i ++) {
    let val = map.get(t[i])
    if(val) {
      map.set(t[i], val - 1)
    } else {
      return false
    }
  }
  return true
};

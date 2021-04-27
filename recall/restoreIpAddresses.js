/**
 * 复原IP地址
 
 示例 1：
 
 输入：s = "25525511135"
 输出：["255.255.11.135","255.255.111.35"]
 示例 2：
 
 输入：s = "0000"
 输出：["0.0.0.0"]
 示例 3：
 
 输入：s = "1111"
 输出：["1.1.1.1"]
 示例 4：
 
 输入：s = "010010"
 输出：["0.10.0.10","0.100.1.0"]
 示例 5：
 
 输入：s = "101023"
 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 
 * 思路：回溯，非常多的判断条件用于剪枝
 * 1. 如果字符串长度大于12，则不是有效ip，直接放弃
 * 2. 用dfs回溯需要注意
 * 2.1 如果回溯段数已经为4段了，无需再回溯
 * 2.2 通过循环来判断三个字符是否满足要求
 * 2.2.1 如果第一个字符为0，则直接自成一段
 * 2.2.2 如果三个字符之和大于255，则抛弃
 * 2.2.3 如果剩余字符多余三段所需字符，则放弃这次的遍历
 * 2.2.4 其他情况则满足回溯要求
 * 
 * 注意：每次回溯后都要将之前的数组值释放，因为数组是个引用而不是拷贝值
 */
var restoreIpAddresses = function(s) {
	if (s.length > 12) return []
	let result = []

	function dfs(ind, cache) {
		if (cache.length === 4 && ind === s.length) return result.push(cache.join("."))
		if (cache.length === 4 && ind !== s.length) return
		let numStr = ""
		for (let i = 1; i <= 3; i++) {
			let begin = ind + i
			numStr += s[begin - 1]
			if (numStr > 255) {
				break
			}
			if (numStr == '0') {
				cache.push('0')
				dfs(begin, cache)
				cache.pop()
				break
			}
			if (s.length - begin > (4 - cache.length) * 3) {
				continue
			}
			cache.push(numStr)
			dfs(begin, cache)
			cache.pop()
		}
	}
	dfs(0, [])
	return result
};

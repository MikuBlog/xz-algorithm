/**
 * 找最短流字符串序列
 */
var shortStream = t => {
	let
		s = "abcdefghijklmnobqrstuvwxyz",
		sum = 0,
		ind = 0,
		pre = 0,
		isFirst = true
	while (ind < t.length) {
		let index = s.indexOf(t[ind++])
		if (pre < index) {
			sum += (index - pre - (isFirst ? 0 : 1))
		} else if (pre > index) {
			sum += (index + s.length - pre - 1)
		}
		pre = index
		isFirst = false
	}
	return sum
}

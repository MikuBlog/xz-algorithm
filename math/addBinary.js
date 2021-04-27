/**
 * 二进制加法
 * 
 * 思路：利用大数相加的方式解决即可
 */
var addBinary = function(a, b) {
	let
		maxLen = Math.max(a.length, b.length),
		result = Array(maxLen).fill(0)
	a = a.padStart(maxLen, '0')
	b = b.padStart(maxLen, '0')
	for (let i = maxLen - 1; i >= 0; i--) {
		result[i] += (+a[i]) + (+b[i])
		if (result[i - 1] !== undefined && result[i] >= 2) {
			result[i] %= 2
			result[i - 1] += 1
		}
	}
	result[0] >= 2 && (result[0] = `1${result[0] % 2}`)
	return result.join("")
};

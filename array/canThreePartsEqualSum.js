/**
 * 将数组分为和相等的三个部分
 * 
 * 思路：贪心算法
 * 1. 先求出数组的总数，并且判断证书是否已能进行三等分，能三等分表示数组就由三部分组成，否则为false
 * 2. 获取总数除以3的值后，开始遍历数组，如果累计两次计算都有满足总数除以3的值且数组未遍历完毕，那么则为true（因为前面已经证明了有三部分，满足两部分后，第三部分肯定满足）
 */
var canThreePartsEqualSum = function(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	if (sum % 3 === 0) {
		sum /= 3
	} else {
		return false
	}
	let curSum = 0,
		times = 0
	for (let i = 0; i < arr.length; i++) {
		if (times === 2) return true
		curSum += arr[i]
		if (curSum === sum) {
			times++
			curSum = 0
		}
	}
	return false
};

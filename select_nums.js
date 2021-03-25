/**
 * 选出3或3的倍数的序号出队，并将所有队列进行输出
 * 输入：[1, 2, 3, 4, 5]
 * 输出：[[3], [4], [5], [1, 2]]
 */
let selectNum = arr => {
	let
		len = arr.length,
		newArr = [],
		times = 0
	while (len > 2) {
		newArr[times] = []
		for (let i = 0; i < len; i++) {
			if (String(i + 1).indexOf('3') !== -1 || (i + 1) % 3 === 0) {
				newArr[times].push(arr[i])
				arr[i] = 0
			}
		}
		arr = arr.filter(val => val !== 0)
		len = arr.length
		times++
	}
	return newArr.concat([arr])
}

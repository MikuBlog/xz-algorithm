/**
 * 最大交换
 * 
 示例 1 :
 
 输入: 2736
 输出: 7236
 解释: 交换数字2和数字7。
 示例 2 :
 
 输入: 9973
 输出: 9973
 解释: 不需要交换。
 
 思路：
 1. 从左到右找到离左侧最近的第一个最小值，找到最小值右侧的一个最大值，然后进行交换
 2. 假如找到的最大值依旧小于最小值，且最大值的索引不为最小值，则表示该数已经是最大值，无需进行交换
 3. 假设最大值大于最小值且最小值的索引和最大值的索引不同，进行交换
 */
var maximumSwap = function(num) {
	num = String(num).split("")
	let max = 0,
		min = 0
	for (let i = 0; i < num.length; i++) {
		max = i
		for (let j = i; j < num.length; j++) {
			if (num[max] <= num[j]) {
				max = j
			}
		}
		if (num[i] !== num[max] && num[max] > num[i]) {
			min = i
			break
		}
	}
	if (num[max] < num[min]) return num.join("")
	else {
		let temp = num[min]
		num[min] = num[max]
		num[max] = temp
	}
	return num.join("")
};

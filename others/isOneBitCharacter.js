/**
 * 1比特与2比特
 
 示例 1:
 
 输入: 
 bits = [1, 0, 0]
 输出: True
 解释: 
 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
 示例 2:
 
 输入: 
 bits = [1, 1, 1, 0]
 输出: False
 解释: 
 唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
 
 * 思路：遍历
 * 1. 如果数字是1，则跳过后一个数字
 * 2. 最终判断是否全部跳过，如果全部跳过则返回false，否则返回true
 */
var isOneBitCharacter = function(bits) {
	let ind = 0
	while (ind < bits.length - 1) {
		if (bits[ind] === 1) {
			ind += 2
		} else {
			ind += 1
		}
	}
	return ind === bits.length - 1
};

/**
 * 二进制中1的个数
 
 输入：00000000000000000000000000001011
 输出：3
 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
 
 输入：00000000000000000000000010000000
 输出：1
 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
 
 输入：11111111111111111111111111111101
 输出：31
 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
 
 思路：通过&来消除最右侧的1，一共有多少个1就消除多少个，通过消除的次数来判断一共有多少个1
 */
var hammingWeight = function(n) {
	if (n === 0) return 0;
	let count = 0;
	while (n) {
		n = n & (n - 1);
		count++;
	}
	return count;
};
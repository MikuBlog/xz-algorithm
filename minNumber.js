/**
 * 把数组排成最小的数
 
 示例 1:
 
 输入: [10,2]
 输出: "102"
 示例 2:
 
 输入: [3,30,34,5,9]
 输出: "3033459"
 
 思路：
 1. 先将数组按照一定规律排好序，排序的方法（前后两个数交换位置相加，和相减并通过sort排序即可）
 2. 将数组通过字符串遍历叠加起来即可
 */
var minNumber = function(nums) {
	nums.sort((a, b) => {
		a = String(a)
		b = String(b)
		return (a + b) - (b + a)
	})
	let str = ""
	for (let i = 0; i < nums.length; i++) {
		str += nums[i]
	}
	return str
};

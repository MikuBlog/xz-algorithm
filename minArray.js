/**
 * 旋转数组
 
 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 
 输入：[3,4,5,1,2]
 输出：1
 
 输入：[2,2,2,0,1]
 输出：0
 
 思路：通过旋转数组中找到规律，如果有旋转的话，那么第一个数必然比最小的数要大，否则第一个就是最小的数
 */
var minArray = function(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < numbers[0]) {
			return numbers[i]
		}
	}
	return numbers[0]
};

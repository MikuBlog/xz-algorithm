/**
 * 选择排序
 
 思路：找到数组最大值，并且将数组的最大值移到数组最前方
 */
var selectSort = function(nums) {
	let max = '',
		ind = 0
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (max < nums[j]) {
				max = nums[j]
				ind = j
			}
			if (j === nums.length - 1 && max) {
				let temp = nums[i]
				nums[i] = max
				nums[ind] = temp
			}
		}
		ind = i
		max = ''
	}
	return nums
}

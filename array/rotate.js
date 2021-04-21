/**
 * 旋转数组
 * 
 输入: nums = [1,2,3,4,5,6,7], k = 3
 输出: [5,6,7,1,2,3,4]
 解释:
 向右旋转 1 步: [7,1,2,3,4,5,6]
 向右旋转 2 步: [6,7,1,2,3,4,5]
 向右旋转 3 步: [5,6,7,1,2,3,4]

 思路：
 1. 先整个数组进行旋转
 2. 旋转左半部分
 3. 旋转右半部分
 */
var rotate = function(nums, k) {
	k %= nums.length
	reverse(nums, 0, nums.length - 1)
	reverse(nums, 0, k - 1)
	reverse(nums, k, nums.length - 1)
};

var reverse = function(nums, left, right) {
	if (left >= right) return nums
	let temp = nums[left]
	nums[left] = nums[right]
	nums[right] = temp
	reverse(nums, ++left, --right)
}

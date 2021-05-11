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

/**
 * 旋转图像
 
 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 
 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 
 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[[7,4,1],[8,5,2],[9,6,3]]
 
 * 思路：先水平旋转，再进行对角线翻转
 */
var rotate = function(matrix) {
	if (!matrix.length) return []
	matrix.reverse()
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}
};

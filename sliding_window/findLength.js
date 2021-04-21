/**
 * 最长重复子数组
 
 示例：
 
 输入：
 A: [1,2,3,2,1]
 B: [3,2,1,4,7]
 输出：3
 解释：
 长度最长的公共子数组是 [3, 2, 1] 。
 
 * 思路：滑动窗口，整体表现为数组的滑动
 * 1. 第一次，B数组滑动，查找是否有与A重合的地方，如果有则记录下来，否则将总数清0
 * 2. 第二次，A数组滑动，查找是否有与B重合的地方
 */
var findLength = function(nums1, nums2) {
	let max = 0
	for (let i = 0; i < nums1.length; i++) {
		let sum = 0,
			ind = i
		for (let j = 0; j < nums1.length - i; j++) {
			if (nums1[ind] === nums2[j]) {
				sum += 1
				max = Math.max(sum, max)
			} else {
				sum = 0
			}
			ind++
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		let sum = 0,
			ind = i
		for (let j = 0; j < nums1.length - i; j++) {
			if (nums2[ind] === nums1[j]) {
				sum += 1
				max = Math.max(sum, max)
			} else {
				sum = 0
			}
			ind++
		}
	}
	return max
};
